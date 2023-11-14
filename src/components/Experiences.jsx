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

const Experiences = (props) => {
  const dispatch = useDispatch();
  const Experience = useSelector((state) => state.experiences.content);
  const [ok, setOk] = useState(false);
  const [okPut, setOkPut] = useState(false);


  const okFunction = (elem) => [setOk(elem)];
  const okPutFunction = (elem) => [setOkPut(elem)];
  const countFunction = (elem) => [window.location.reload(elem)];
  useEffect(() => {
    if (typeof props.profileId === "string" && props.profileId.trim() !== "") {
      dispatch(getExperiencesAction(props.profileId));
      console.log(Experience);
    }
  }, [dispatch, props.profileId, ok]);


  return (
    <>
      <div className="d-flex flex-column ms-3 mt-3">
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
                    src="http://placekitten.com/75"
                    alt="kitten"
                    className=""
                  ></img>
                </div>
                <div className="ms-3 w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">{r.role}</h4>
                    <FaPen
                      onClick={() => {
                        setOkPut(true);
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
                <hr className="bg-black w-100 m-0"></hr>
              </div>
              <hr className="bg-black w-100 m-0"></hr>
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
                      <PutDeleteExp countFunction={countFunction} okPutFunction={okPutFunction} _Id={r._id} />
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
                <PostExp  okFunction={okFunction}></PostExp>
              </Modal.Body>
            </Modal.Dialog>
          </div>
        )}
      </div>
    </>
  );
};

export default Experiences;
