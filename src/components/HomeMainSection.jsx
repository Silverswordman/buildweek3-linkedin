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
import Comments from "./Comments";
import { useDispatch } from "react-redux";
import { getCommentsAction } from "../redux/actions";
import Spinner from "react-bootstrap/Spinner";

const HomeMainSection = () => {
  const [postArray, setPostArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = () => {
    setLoading(true);
    setTimeout(() => {
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
        })
        .catch((error) => {
          console.log("ERROR", error);
        })
        .then(() => {
          setLoading(false);
        });
    }, 1300);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsAction());
  }, []);

  return (
    <>
      <HomePostModal getPost={getPosts} />

      {loading && (
        <div className="text-center m-3">
          <Spinner animation="grow" variant="secondary" />
        </div>
      )}

      {postArray.reverse().map((r) => (
        <div
          className="bg-white my-3 border border-1 rounded p-4"
          style={{ display: "block", position: "initial" }}
          key={r._id}
        >
          <Modal.Dialog>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex w-100 justify-content-between">
                <div className="d-flex">
                  <div>
                    <img
                      src={r.user.image || ProfilePic}
                      className="rounded-circle"
                      alt="user"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 mb-0">{r.user.username}</h6>
                    <p className="mb-0 ms-3 text-secondary Fs-8 ">
                      {r.user.bio ||
                        Math.floor(Math.random() * 10000) + " Followers"}
                    </p>
                    <div className="d-flex  align-items-center">
                      <span className="mb-0 ms-3 text-secondary Fs-8 ">
                        {formatDistance(new Date(r.updatedAt), new Date(), {
                          addSuffix: true,
                        })}
                      </span>
                      <FaGlobeAmericas className="text-secondary ms-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <HiDotsHorizontal className="text-secondary ms-2" />
                  <RxCross1 className="text-secondary ms-2" />
                </div>
              </div>
            </div>
            <Modal.Body>
              <p className="mt-3">{r.text}</p>
              {r.image && (
                <div className="text-center">
                  <img src={r.image} className=" mw-100 mh-100 p-4" alt="" />
                </div>
              )}
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-around">
              <div>
                <FaThumbsUp className="text-secondary" />
                <span className="ms-2">Consiglia</span>
              </div>
              <div>
                <FaCommentDots className="text-secondary" />
                <span className="ms-2">Commenta</span>
              </div>
              <div>
                <ImLoop className="text-secondary" />
                <span className="ms-2">Diffondi il post</span>
              </div>
              <div>
                <IoPaperPlane className="text-secondary" />
                <span className="ms-2">Invia</span>
              </div>
            </Modal.Footer>
          </Modal.Dialog>
          <Comments profileId={r._id} />
        </div>
      ))}
    </>
  );
};

export default HomeMainSection;
