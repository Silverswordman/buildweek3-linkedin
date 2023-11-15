import { useEffect, useState } from "react";
import { BsFillInfoSquareFill } from "react-icons/bs";
import ProfilePic from "../Assets/1660833954461.png";
import { FaChevronDown } from "react-icons/fa";
import LogoLI from "../Assets/logo.png";

const HomeRightSection = () => {
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
        <div className="bg-white my-2 py-2 border border-1r rounded ">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 px-2 py-1 fw-semibold">LinkedIn Notizie</p>
            <BsFillInfoSquareFill className=" me-2"></BsFillInfoSquareFill>
          </div>
          <ul className="me-2">
            <li className="Fs-9 mb-1">
              <p className="mb-0 fw-semibold">
                La "Sindrome della Papera" ci riguarda
              </p>
              <p className="mb-0 text-secondary Fs-8">18 ore fa</p>
            </li>
            <li className="Fs-9 mb-1">
              <p className="mb-0 fw-semibold">
                Esselunga ora compete con Tannico
              </p>
              <p className="mb-0 text-secondary Fs-8">19 ore fa</p>
            </li>
            <li className="Fs-9 mb-1">
              <p className="mb-0 fw-semibold">Le Telco peggiorano ancora</p>
              <p className="mb-0 text-secondary Fs-8">1 ora fa</p>
            </li>
            <li className="Fs-9 mb-1">
              <p className="mb-0 fw-semibold">
                Un mercato del lavoroche invecchia
              </p>
              <p className="mb-0 text-secondary Fs-8">1 giorno fa</p>
            </li>
            <li className="Fs-9 mb-1">
              <p className="mb-0 fw-semibold">
                L'industria europea sta adottando il 5G
              </p>
              <p className="mb-0 text-secondary Fs-8">1 giorno fa</p>
            </li>
          </ul>
          <div className="d-flex align-items-center mx-4 text-secondary">
            <p className="mb-0 fw-semibold">Show more</p>
            <FaChevronDown className="ms-2"></FaChevronDown>
          </div>
        </div>
      </div>
      <div className="m-3" style={{ display: "block", position: "initial" }}>
        <div className="bg-white my-2 py-2 border border-1r rounded ">
          <p className="Fs-8 text-secondary text-center mx-2 mt-3">
            Rimani al corrente con news e informazioni rilevanti
          </p>
          <div className="d-flex justify-content-center align-items-center ">
            <img src={ProfilePic} alt="profile pic" width={90}></img>
            <img src={LogoLI} width={60} alt="pic azienda"></img>
          </div>
          <p className="text-center text-secondary mb-0">
            {profileObj.name}, ti potrebbe interessare seguire{" "}
          </p>
          <div className="d-flex flex-column align-items-center">
            <p className="mb-0 ">EPICODE</p>
            <div className=" border border-1r rounded-pill border-info w-25 text-center my-3">
              <p className="mb-0 number">Segui</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeRightSection;
