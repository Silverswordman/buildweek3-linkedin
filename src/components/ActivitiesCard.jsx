import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiOutlinePencil } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AddPostModal from "./AddPostModal";
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
import DeletePutPostModal from "./DeletePutPostModal";
import { useLocation } from "react-router-dom";

const Activities = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activityok, setActivityok] = useState(true);
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c";
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const location = useLocation();

  const setRefreshFunction = (par) => {
    setRefresh(refresh + par);
  };

  const [ok3, setOk3] = useState(``);
  const setShowAddFunc = (par) => {
    setShowAdd(par);
  };
  const setShowDeleteFunc = (par) => {
    setShowDelete(par);
  };
  const [profileData, setProfileData] = useState();
  const [ok, setOk] = useState(false);
  const [postArray, setPostArray] = useState([]);

  function changeBackground() {
    setIsHovered(true);
  }

  function resetBackground() {
    setIsHovered(false);
  }

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
        const a = data.filter((elem) => elem.username === profileData.username);
        setPostArray(a);

        console.log(postArray);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

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
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAdd, showDelete, refresh]);
  if (location === "/me") {
    return (
      <>
        <Card className="mt-3">
          <Card.Body className="p-4 l">
            <Card.Title>
              <Row>
                <Col lg={6} className="fw-bold ">
                  Attività
                </Col>

                <Col lg={6} className="text-end ">
                  <Button
                    onClick={() => {
                      setShowAdd(true);
                    }}
                    variant="outline-primary  "
                    className="rounded-pill border-1 py-1 px-3 me-3 fw-bold "
                  >
                    Crea un post
                  </Button>{" "}
                  <HiOutlinePencil
                    className=" fs-4 text-secondary  "
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>
            </Card.Title>
            <Card.Text
              className="text-primary   fw-bold small "
              style={{ cursor: "pointer" }}
            >
              20 follower
            </Card.Text>
          </Card.Body>
          {activityok && (
            <Card.Footer
              className={`bg-${
                isHovered ? "secondary-subtle text-dark" : "white"
              } text-center text-secondary  fw-bold`}
              style={{ cursor: "pointer" }}
              onMouseEnter={changeBackground}
              onMouseLeave={resetBackground}
              onClick={() => {
                getPosts();
                setActivityok(false);
              }}
            >
              Mostra tutte le attività <FaArrowRight />
            </Card.Footer>
          )}
          {activityok === false && (
            <Card.Footer
              className={`bg-${
                isHovered ? "secondary-subtle text-dark" : "white"
              } text-center text-secondary  fw-bold`}
              style={{ cursor: "pointer" }}
              onMouseEnter={changeBackground}
              onMouseLeave={resetBackground}
              onClick={() => {
                setActivityok(true);
              }}
            >
              Mostra Meno <FaArrowRight />
            </Card.Footer>
          )}
        </Card>
        <div className="w-75">
          <AddPostModal
            show={showAdd}
            setShowAddFunc={setShowAddFunc}
            profileData={profileData}
          />
        </div>

        {activityok === false &&
          postArray.map((r) => {
            return (
              <div
                className="bg-white my-3 p-3 border border-1 rounded"
                style={{ display: "block", position: "initial" }}
                key={r._id}
              >
                <Modal.Dialog>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex w-100 justify-content-between">
                      <div className="d-flex">
                        <div>
                          <img
                            src={r.image ? r.image : ProfilePic}
                            className="rounded-circle"
                            alt="kitten"
                            width={50}
                          ></img>
                        </div>
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 mb-0">{r.username}</h6>
                          <p className="mb-0 ms-3 text-secondary Fs-8 w-100 ">
                            {r.user.bio
                              ? r.user.bio
                              : Math.floor(Math.random() * 10000) +
                                " Followers"}
                          </p>
                          <div className="d-flex  align-items-center">
                            <span className="mb-0 ms-3 text-secondary Fs-8 ">
                              {/* {format(new Date(r.updatedAt), "MM/dd/yyyy")} */}
                              {formatDistance(
                                new Date(r.updatedAt),
                                new Date(),
                                {
                                  addSuffix: true,
                                }
                              )}
                            </span>
                            <FaGlobeAmericas className="text-secondary ms-2"></FaGlobeAmericas>
                          </div>
                        </div>
                      </div>
                      <div>
                        <HiDotsHorizontal className="text-secondary ms-2"></HiDotsHorizontal>
                        <RxCross1
                          onClick={() => {
                            setShowDelete(true);
                            setOk3(r._id);
                          }}
                          className="text-secondary ms-2"
                        ></RxCross1>
                      </div>
                    </div>
                  </div>
                  <Modal.Body>
                    <p className="w-100  mt-3 kkk">{r.text}</p>
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
                <div className="w-75">
                  {ok3 === r._id && (
                    <DeletePutPostModal
                      refresh={refresh}
                      showDelete={showDelete}
                      setShowDeleteFunc={setShowDeleteFunc}
                      profileData={profileData}
                      text={r.text}
                      _id={r._id}
                      setRefreshFunction={setRefreshFunction}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </>
    );
  }
};

export default Activities;
