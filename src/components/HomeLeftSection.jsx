import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import ProfilePic from "../Assets/1660833954461.png";
import { FaPlus } from "react-icons/fa6";

const HomeLeftSection = () => {
  const [profileObj, setprofileObj] = useState([]);
  const getProfiles = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
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
        console.log("profile", data);
        setprofileObj(data);
        console.log(profileObj);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(
    () => {
      getProfiles();
      console.log(profileObj);
    },
    [],
    profileObj
  );
  return (
    <>
      <div className="m-3" style={{ display: "block", position: "initial" }}>
        <div className="bg-white  border border-1r rounded ">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className=" px-3 pt-3 d-flex flex-column justify-content-center align-items-center">
              <img src={ProfilePic} width={90} alt="pic profile"></img>
              <h6 className="mb-0">
                {" "}
                {profileObj.name} {profileObj.surname}
              </h6>
            </div>

            <p className="mb-0 px-2 text-secondary Fs-8">{profileObj.title}</p>
            <hr className="bg-black w-100 my-1"></hr>
          </div>
          <div className="d-flex justify-content-between px-2 ">
            <div>
              <p className="mb-0 mt-2 fw-semibold text-secondary Fs-8">
                Collegamenti
              </p>
              <p className="mb-0 fw-semibold Fs-9">Espandi la tua rete</p>
            </div>
            <p className="number mb-0 mt-2">16</p>
          </div>
          <hr className="bg-black w-100 mb-0 "></hr>
          <div className="d-flex justify-content-around px-2 ">
            <div>
              <p className="mb-0 mt-2 text-secondary Fs-8">
                Accedi a strumenti e informazioni in esclusiva
              </p>
              <p className="mb-0 fw-semibold Fs-9">Prova Premium gratis</p>
            </div>
          </div>
          <hr className="bg-black w-100 my-2"></hr>
          <div className="d-flex p-2 text-align-center ">
            <FaBookmark className="text-secondary me-2"></FaBookmark>
            <p className="mb-0 Fs-8"> I miei elementi</p>
          </div>
        </div>
        <div className="bg-white my-2 py-2 border border-1r rounded ">
          <p className="mb-0 px-2 py-1 number fw-semibold Fs-8">Gruppi</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 px-2 py-1 number fw-semibold Fs-8">Eventi</p>
            <FaPlus className="text-secondary me-2"></FaPlus>
          </div>
          <p className="mb-0 px-2 py-1 number fw-semibold Fs-8">
            Hashtag seguiti
          </p>
          <hr className="bg-black w-100 my-1"></hr>
          <p className="text-center fw-semibold text-secondary m-2 Fs-8">
            Scopri di più
          </p>
        </div>
      </div>
    </>
  );
};
export default HomeLeftSection;
