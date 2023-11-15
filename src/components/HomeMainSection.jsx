import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { IoPaperPlane } from "react-icons/io5";
import ProfilePic from "../Assets/1660833954461.png";

const HomeMainSection = () => {
  const [postArray, setPostArray] = useState([]);
  const getPosts = () => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recuper informazioni");
        }
      })
      .then((data) => {
        console.log("posts", data);
        setPostArray(data);
        console.log(postArray);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(
    () => {
      getPosts();
      console.log(postArray);
    },
    [],
    postArray
  );

  return (
    <>
      {postArray.map((r) => {
        return (
          <div
            className="bg-white m-3 p-3 border border-1r rounded"
            style={{ display: "block", position: "initial" }}
            key={r._id}
          >
            <Modal.Dialog>
              <div className="d-flex ms-3 align-items-center">
                <div>
                  <img
                    src={r.image ? r.image : ProfilePic}
                    className="rounded-circle"
                    alt="kitten"
                    width={50}
                  ></img>
                </div>
                <div>
                  <h5 className="ms-3 mt-3">{r.username}</h5>
                  <p className="mb-0 ms-3">{r.user.bio}</p>
                  <p className="mb-0 ms-3">{r.updatedAt}</p>
                </div>
              </div>
              <Modal.Body>
                <p>{r.text}</p>
              </Modal.Body>

              <Modal.Footer className="d-flex justify-content-around">
                <div>
                  <FaThumbsUp></FaThumbsUp>
                  <span className="ms-2">Consiglia</span>
                </div>

                <div>
                  <FaCommentDots></FaCommentDots>
                  <span className="ms-2">Commenta</span>
                </div>
                <div>
                  <ImLoop></ImLoop>
                  <span className="ms-2">Diffondi il post</span>
                </div>
                <div>
                  <IoPaperPlane></IoPaperPlane>
                  <span className="ms-2">Invia</span>
                </div>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        );
      })}
    </>
  );
};
export default HomeMainSection;
