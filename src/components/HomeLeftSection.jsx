import { useEffect, useState, useRef } from "react";
import { FaBookmark } from "react-icons/fa";
import ProfilePic from "../Assets/1660833954461.png";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import profileback from "../Assets/profilebackground.jpg";
import { Row } from "react-bootstrap";

const HomeLeftSection = () => {
  const [profileObj, setProfileObj] = useState([]);
  const containerRef = useRef(null);

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
          throw new Error("Errore nel recupero delle informazioni");
        }
      })
      .then((data) => {
        setProfileObj(data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const [hoveredCol, setHoveredCol] = useState(null);
  const [hoveredCol2, setHoveredCol2] = useState(null);

  const handleMouseEnter = (colIndex) => {
    setHoveredCol(colIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCol(null);
  };

  const getColStyle = (colIndex) => {
    const baseStyle = {
      cursor: "pointer",
    };

    if (colIndex === hoveredCol) {
      return {
        ...baseStyle,
        backgroundColor: "#e0e0e0",
      };
    }

    return baseStyle;
  };
  const handleMouseEnter2 = (colIndex2) => {
    setHoveredCol2(colIndex2);
  };

  const handleMouseLeave2 = () => {
    setHoveredCol2(null);
  };

  const getColStyle2 = (colIndex2) => {
    const baseStyle = {
      cursor: "pointer",
    };

    if (colIndex2 === hoveredCol2) {
      return {
        ...baseStyle,
        textDecoration: "underline",
      };
    }

    return baseStyle;
  };

  useEffect(() => {
    getProfiles();
    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  const updateContainerSize = () => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      // Puoi fare qualcosa con la larghezza del contenitore se necessario
    }
  };

  return (
    <div ref={containerRef} style={{ display: "block", position: "initial" }}>
      <div className="bg-white border border-1 rounded">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            {" "}
            <img
              src={profileback}
              alt="profileback"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%", // Usa il 100% per adattarsi alla larghezza del contenitore
                height: "auto", // Imposta l'altezza su "auto" per mantenere le proporzioni originali
                zIndex: -1,
              }}
            ></img>
          </div>
          <div className="px-3  d-flex flex-column justify-content-center align-items-center">
            <img
              src={ProfilePic}
              width={100}
              alt="pic profile"
              className="position-relative top-0 start-50 translate-middle "
            ></img>
            <h6
              className="mb-0"
              style={getColStyle2(3)}
              onMouseEnter={() => handleMouseEnter2(3)}
              onMouseLeave={handleMouseLeave2}
            >
              {profileObj.name} {profileObj.surname}
            </h6>
          </div>
          <p className="mb-1 px-2 text-secondary Fs-8 ">{profileObj.title}</p>
          <hr className="bg-black w-100 my-1"></hr>
        </div>
        <div className="d-flex justify-content-between px-2 ">
          <div>
            <p
              className="mb-0 mt-2 fw-semibold text-secondary Fs-8"
              style={getColStyle(0)}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              Collegamenti
            </p>
            <Link
              to="/profile"
              className="mb-0 fw-semibold Fs-8 text-secondary text-decoration-none "
              style={getColStyle(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              Espandi la tua rete
            </Link>
          </div>
          <p className="number mb-0 mt-2">16</p>
        </div>
        <hr className="bg-black w-100 mb-0 "></hr>
        <div
          className="d-flex justify-content-between px-2 "
          style={getColStyle(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <p className="mb-0 mt-2 text-secondary Fs-8">
              Accedi a strumenti e informazioni in esclusiva
            </p>
            <p className="mb-0 fw-semibold Fs-8">Prova Premium NON gratis</p>
          </div>
        </div>
        <hr className="bg-black w-100 my-2"></hr>
        <div
          className="d-flex p-2 text-align-center "
          style={getColStyle(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <FaBookmark className="text-secondary me-2"></FaBookmark>
          <p className="mb-0 Fs-8"> I miei elementi</p>
        </div>
      </div>
      <div className="bg-white my-2  border border-1r rounded ">
        <p
          className="mb-0 px-2 py-1 number fw-semibold Fs-8"
          style={getColStyle2(1)}
          onMouseEnter={() => handleMouseEnter2(1)}
          onMouseLeave={handleMouseLeave2}
        >
          Gruppi
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <p
            className="mb-0 px-2 py-1 number fw-semibold Fs-8"
            style={getColStyle2(2)}
            onMouseEnter={() => handleMouseEnter2(2)}
            onMouseLeave={handleMouseLeave2}
          >
            Eventi
          </p>
          <FaPlus className="text-secondary me-2"></FaPlus>
        </div>
        <p
          className="mb-0 px-2 py-1 number fw-semibold Fs-8"
          style={getColStyle2(0)}
          onMouseEnter={() => handleMouseEnter2(0)}
          onMouseLeave={handleMouseLeave2}
        >
          Hashtag seguiti
        </p>
        <hr className="bg-black w-100 my-0"></hr>
        <div
          style={getColStyle(4)}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          className="py-1"
        >
          <p className="text-center fw-semibold text-secondary m-2 Fs-5 mb-0">
            Scopri di più
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeLeftSection;
