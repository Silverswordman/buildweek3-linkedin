import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import PostExp from "./PostExp";
import format from "date-fns/format";
import { FaPen } from "react-icons/fa6";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import PutDeleteExp from "./PutDeleteExp";
import  empty  from "../Assets/linkedin.png";
import { Card } from "react-bootstrap";

const Experiences = (props) => {
  const dispatch = useDispatch();
  const Experience = useSelector((state) => state.experiences.content);
  console.log(Experience);
  const [ok, setOk] = useState(false);
  const [okPut, setOkPut] = useState(false);
  const [underId, setUnderId] = useState(0);

  const okFunction = (elem) => [setOk(elem)];
  const underIdFunction = (elem) => [setUnderId(elem)];
  const okPutFunction = (elem) => [setOkPut(elem)];
  const countFunction = (elem) => [window.location.reload(elem)];
  useEffect(() => {
    if (typeof props.profileId === "string" && props.profileId.trim() !== "") {
      dispatch(getExperiencesAction(props.profileId));
      // console.log(Experience);
    }
  }, [dispatch, props.profileId, ok, underId]);

  return (
    <>
    <Card className="p-3 mt-3">
      <div className="d-flex flex-column  ">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="">Esperienza</h2>
          <FaPlus
            onClick={() => {
              setOk(true);
            }}
            className="me-3"
          />
        </div>
        {Experience.map((r) => {
          return (
            <div key={r._id}>
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
                    <FaPen
                      onClick={() => {
                        setOkPut(r._id);
                        setUnderId(r._id);
                        console.log(`ciao`);
                      }}
                    />
                  </div>
                  <p className="mb-0">{r.company}</p>
                  <p className="mb-0">
                  {r.startDate && r.endDate && (
                    <>
                      {format(new Date(r.startDate), "MM/dd/yyyy")} -
                      {format(new Date(r.endDate), "MM/dd/yyyy")}
                    </>
                    )}
                  </p>
                  <p className="mb-0">{r.area}</p>
                  <p className="mt-3 mb-0">{r.description}</p>
                </div>
                {/* <hr className="bg-black w-100 m-0"></hr> */}
              </div>
              {/* <hr className="bg-black w-100 m-0"></hr> */}
              {okPut && (
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
                        underIdFunction={underIdFunction}
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
                <PostExp okFunction={okFunction}></PostExp>
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
