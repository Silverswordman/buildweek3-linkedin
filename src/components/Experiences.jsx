import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import PostExp from "./PostExp";
import format from "date-fns/format";
import { HiOutlinePencil } from "react-icons/hi";
import Modal from "react-bootstrap/Modal";
import { LiaPlusSolid } from "react-icons/lia";
import PutDeleteExp from "./PutDeleteExp";
import empty from "../Assets/linkedin.png";
import { useLocation } from "react-router-dom";

const Experiences = (props) => {
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZGEzMDE1ODgwMTAwMTg2NDJjODQiLCJpYXQiOjE3MDAxMjUyMzIsImV4cCI6MTcwMTMzNDgzMn0.OldITBQRnPFb8j3LBIPOgmHzNArjzjsd8ikaf3keZ2g";

  const location = useLocation();
  const { pathname } = useLocation();
  const isMeRoute = pathname === "/me";
  const dispatch = useDispatch();
  const [Experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ok, setOk] = useState(false);
  const [ok1, setOk1] = useState(``);
  const [okPut, setOkPut] = useState(false);
  const [underId, setUnderId] = useState(0);

  const setOk1Function = (par) => {
    setOk1(par);
  };

  const okFunction = (elem) => [setOk(elem)];
  const underIdFunction = (elem) => setUnderId(underId + elem);
  const okPutFunction = (elem) => [setOkPut(elem)];
  const countFunction = (elem) => [window.location.reload(elem)];

  const getExperiences = () => {
    setLoading(true);
    if (props.profileId) {
      setTimeout(() => {
        fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${props.profileId}/experiences`,
          {
            headers: {
              Authorization: key,
            },
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("errore nel recupero dei dati");
            }
          })
          .then((experiences) => {
            console.log(experiences);
            setExperience(experiences);
          })
          .catch((err) => {
            console.log("errore", err);
          })
          .then(() => {
            setLoading(false);
          });
      }, 1300);
    }
  };

  useEffect(() => {
    getExperiences();
  }, [dispatch, props.profileId, underId]);

  return (
    <>
      <Card className="p-3 mt-3">
        <div className="d-flex flex-column  ">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="">Esperienza</h2>
            {isMeRoute && (
              <LiaPlusSolid
                onClick={() => {
                  setOk(true);
                }}
                className="me-3"
              />
            )}
          </div>
          {loading && (
            <div className="text-center">
              <Spinner animation="grow" variant="secondary" />
            </div>
          )}{" "}
          {Experience.map((r) => {
            return (
              <div key={r._id}>
                {ok1 === r._id && (
                  <div
                    className="modal show modal-modify"
                    style={{ display: "block", position: "initial" }}
                  >
                    <Modal.Dialog>
                      <Modal.Header
                        closeButton
                        onClick={() => {
                          setUnderId(0);
                          setOkPut(false);
                          setOk1(``);
                        }}
                      >
                        <Modal.Title>
                          Modifica esperienza
                          <span className="fw-bold text-success">
                            {" "}
                            {r.role.toUpperCase()}
                          </span>
                        </Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <PutDeleteExp
                          setOk1Function={setOk1Function}
                          underIdFunction={underIdFunction}
                          countFunction={countFunction}
                          okPutFunction={okPutFunction}
                          _Id={r._id}
                        />
                      </Modal.Body>
                    </Modal.Dialog>
                  </div>
                )}
                <div className="d-flex m-3">
                  <div>
                    <img
                      src={empty}
                      alt="kitten"
                      className="rounded-1"
                      width={50}
                    ></img>
                  </div>
                  <div className="ms-3 w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="mb-0">{r.role}</h4>
                      {isMeRoute && (
                        <HiOutlinePencil
                          onClick={() => {
                            setOk1(r._id);
                          }}
                        />
                      )}
                    </div>
                    <p className="mb-0">{r.company}</p>
                    <p className="mb-0">
                      {r.startDate && r.endDate && (
                        <span>
                          {format(new Date(r.startDate), "MM/dd/yyyy")} -
                          {format(new Date(r.endDate), "MM/dd/yyyy")}
                        </span>
                      )}
                    </p>
                    <p className="mb-0">{r.area}</p>
                    <p className="mt-3 mb-0">{r.description}</p>
                  </div>
                </div>
                {okPut && (
                  <div
                    className="modal show modal-modify"
                    style={{ display: "block", position: "initial" }}
                  >
                    <Modal.Dialog>
                      <Modal.Header
                        closeButton
                        onClick={() => {
                          setOkPut(false);
                        }}
                      >
                        <Modal.Title>Modifica esperienza</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <PutDeleteExp
                          countFunction={countFunction}
                          okPutFunction={okPutFunction}
                          _Id={r._id}
                        />
                      </Modal.Body>
                    </Modal.Dialog>
                  </div>
                )}
              </div>
            );
          })}
          {ok && (
            <div
              className="modal show modal-modify"
              style={{ display: "block", position: "initial" }}
            >
              <Modal.Dialog>
                <Modal.Header
                  closeButton
                  onClick={() => {
                    setOk(false);
                  }}
                >
                  <Modal.Title>Aggiungi esperienza</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <PostExp
                    getExperiences={getExperiences}
                    okFunction={okFunction}
                    underIdFunction={underIdFunction}
                  ></PostExp>
                </Modal.Body>
              </Modal.Dialog>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default Experiences;
