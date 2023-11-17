import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { IoPaperPlane } from "react-icons/io5";
import ProfilePic from "../Assets/1660833954461.png";
import { RxCross1 } from "react-icons/rx";
import { HiDotsHorizontal } from "react-icons/hi";
import formatDistance from "date-fns/formatDistance";
import { FaGlobeAmericas } from "react-icons/fa";
import HomePostModal from "./HomePostModal";
import HomeComments from "./HomeComments";

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
  const [refersh, setRefresh] = useState(0);
  const setRefreshFunction = (par) => {
    setRefresh(refersh + par);
  };
  const hide = (par) => {
    console.log(par);
    postArray.filter((elem) => elem._id === par);
    setRefreshFunction(1);
  };

  useEffect(() => {
    getPosts();
    console.log(postArray);
  }, [refersh]);

  return (
    <>
      <HomePostModal
        getPost={getPosts}
        setRefreshFunction={setRefreshFunction}
      />

      {postArray.reverse().map((r) => {
        return (
          <div
            className="bg-white my-3  border border-1 rounded p-4"
            style={{ display: "block", position: "initial" }}
            key={r._id}
          >
            <Modal.Dialog>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex w-100 justify-content-between">
                  <div className="d-flex">
                    <div>
                      <img
                        src={r.user.image ? r.user.image : ProfilePic}
                        className="rounded-circle"
                        alt="kitten"
                        width={50}
                        height={50}
                      ></img>
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 mb-0">{r.user.username}</h6>
                      <p className="mb-0 ms-3 text-secondary Fs-8 ">
                        {r.user.bio
                          ? r.user.bio
                          : Math.floor(Math.random() * 10000) + " Followers"}
                      </p>
                      <div className="d-flex  align-items-center">
                        <span className="mb-0 ms-3 text-secondary Fs-8 ">
                          {/* {format(new Date(r.updatedAt), "MM/dd/yyyy")} */}
                          {formatDistance(new Date(r.updatedAt), new Date(), {
                            addSuffix: true,
                          })}
                        </span>
                        <FaGlobeAmericas className="text-secondary ms-2"></FaGlobeAmericas>
                      </div>
                    </div>
                  </div>
                  <div>
                    <HiDotsHorizontal className="text-secondary ms-2"></HiDotsHorizontal>
                    <RxCross1
                      // onClick={() => {
                      //   hide(r._id);
                      //   console.log(r._id);
                      // }}
                      className="text-secondary ms-2"
                    ></RxCross1>
                  </div>
                </div>
              </div>
              <Modal.Body>
                <p className="mt-3">{r.text}</p>
              </Modal.Body>

              <Modal.Footer className="d-flex justify-content-around">
                <div>
                  <FaThumbsUp className="text-secondary"></FaThumbsUp>
                  <span className="ms-2">Consiglia</span>
                </div>

                <div>
                  <FaCommentDots className="text-secondary"></FaCommentDots>
                  <span className="ms-2">Commenta</span>
                </div>
                <div>
                  <ImLoop className="text-secondary"></ImLoop>
                  <span className="ms-2">Diffondi il post</span>
                </div>
                <div>
                  <IoPaperPlane className="text-secondary"></IoPaperPlane>
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
