import Modal from "react-bootstrap/Modal";

import { FaRegImage } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiArticleThin } from "react-icons/pi";
import AddPostModal from "./AddPostModal";
import { useEffect, useState } from "react";

const HomePostModal = (props) => {
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c";

  const [ok, setOk] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const setShowAddFunc = (par) => {
    setShowAdd(par);
  };
  const [profileData, setProfileData] = useState();

  const getProfile = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero del profilo");
        }
      })
      .then((profile) => {
        console.log(profile);
        setProfileData(profile);
        setOk(true);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {ok && (
        <div
          className="bg-white  border border-1 rounded-2 my-2"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Body>
              <div className="d-flex w-100 my-2 mx-2">
                <div className="rounded-5 profile-img">
                  <img
                    src={profileData.image}
                    className="rounded-50"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>

                <button
                  onClick={() => {
                    setShowAdd(true);
                    
                  }}
                  className="flex-grow-1 me-4 ms-2 my-1 rounded-5  border border-1 text-start text-secondary"
                >
                  <span className="ms-2 fw-semibold">Avvia un post</span>
                </button>
              </div>

              <div className="d-flex justify-content-between mx-2 mb-3 px-2">
                <span className="fw-semibold d-flex align-items-center text-secondary">
                  <FaRegImage className="fs-4 me-2  text-primary" /> Contenuti
                  multimediali
                </span>
                <span className="fw-semibold d-flex align-items-center text-secondary">
                  <FaRegCalendarAlt className="fs-4 me-2  text-warning" />{" "}
                  Evento
                </span>
                <span className="fw-semibold d-flex align-items-center text-secondary">
                  <PiArticleThin className="fs-4 me-2  text-danger" />
                  Scrivi articolo
                </span>
              </div>
            </Modal.Body>
          </Modal.Dialog>
          <div className="w-75">
            <AddPostModal
              show={showAdd}
              setShowAddFunc={setShowAddFunc}
              profileData={profileData}
              setRefreshFunction={props.setRefreshFunction}
              getPosts={props.getPost}    
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePostModal;
