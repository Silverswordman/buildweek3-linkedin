import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { IoMdArrowDropdown } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { FaRegImage } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiArticle } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const DeletePutPostModal = (props) => {
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c";
  const id = props._id;
  const [post, setPost] = useState({
    text: props.text,
  });

  const deleteData = () => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
      method: "DELETE",
      headers: {
        Authorization: key,
      },
    })
      .then((events) => {
        // console.log("oggetto inviato", events);
        if (events.ok) {
          alert("oggetto eliminato");
        } else {
          alert("errore");
          throw new Error("errore nella delete");
        }
      })
      .catch((err) => {
        console.log("si e verificato un errore", err);
      });
  };

  const PutData = () => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
        Authorization: key,
      },
    })
      .then((events) => {
        console.log("oggetto modiicato", events);
        console.log(props._Id);
        if (events.ok) {
          alert("oggetto modiicato");
        } else {
          alert("errore");
          throw new Error("errore nel post");
        }
      })
      .catch((err) => {
        console.log("si e verificato un errore", err);
      });
  };

  //
  return (
    <>
      {props.showDelete && (
        <div
          className="modal show  bg-white addPost"
          style={{ display: "block", position: "initial" }}
        >
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              PutData();
              props.setShowDeleteFunc(false);
              // props.setRefreshFunction(1);
              // console.log(props.refresh);
            }}
          >
            <div className="p-3">
              <div className="d-flex justify-content-between my-2">
                <Button className="bg-white" variant="white">
                  <div className="d-flex align-items-center">
                    <img
                      src={props.profileData.image}
                      className="rounded-50"
                      width={50}
                      height={50}
                      alt=""
                    />
                    <div className="d-flex flex-column align-items-start ms-3">
                      <h5 className="mb-0">
                        {props.profileData.username}
                        <span className="ms-2">
                          <IoMdArrowDropdown />
                        </span>
                      </h5>
                      <p className="mb-0">Pubblica:Chiunque</p>
                    </div>
                  </div>
                </Button>
                <p>
                  <IoClose
                    onClick={() => {
                      props.setShowDeleteFunc(false);
                    }}
                    className="fs-2 text-secondary"
                  />
                </p>
              </div>
              <div className="d-flex flex-column justify-content-between  align-items-start">
                <div className="w-100">
                  <textarea
                    onChange={(e) => {
                      setPost({ text: e.target.value });
                    }}
                    required
                    className="outline-0 border-0 w-100 fs-5 my-4"
                    rows={9}
                    placeholder="Di cosa vorresti parlare?"
                    value={post.text}
                  ></textarea>
                </div>
                <div className="d-flex flex-column">
                  <div>
                    <Button className="fs-4  mx-2 rounded-5 bg-none border-0 text-secondary mb-3">
                      <FaRegSmile />
                    </Button>
                  </div>
                  <div className="d-flex">
                    <Button className="fs-4 mx-2 rounded-5 bg-grey1 border-0 text-secondary">
                      <FaRegImage />
                    </Button>
                    <Button className="fs-4 mx-2 rounded-5 bg-grey1 border-0 text-secondary">
                      <FaRegCalendarAlt />
                    </Button>
                    <Button className="fs-4 bg-grey1 border-0 text-secondary mx-2 rounded-5">
                      <PiArticle />
                    </Button>
                    <Button className="fs-4 bg-grey1 border-0 text-secondary mx-2 rounded-5">
                      <BsThreeDots />
                    </Button>
                  </div>
                </div>
              </div>
              <hr className="bg-secondary" />
              <div className="d-flex justify-content-end my-3 align-items-center ">
                <GoClock className="fs-4" />
                <button
                  type="submit"
                  className="postButton text-secondary mx-4 "
                >
                  MODIFICA
                </button>
                <button
                  onClick={() => {
                    deleteData();
                    props.setShowDeleteFunc(false);
                    props.setRefreshFunction(1);
                  }}
                  className="postButton text-secondary mx-4"
                >
                  ELMINA
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default DeletePutPostModal;
