import { useEffect, useState } from "react";
import PostExp from "./PostExp";

const Experiences = () => {
  const UserId = "6551e9edc55e7e0018f83c00";
  const [Experience, setExperience] = useState([]);
  useEffect(() => {
    getExperiences();
  }, []);

  const getExperiences = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        UserId +
        "/experiences",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recuperare le informazioni");
        }
      })
      .then((data) => {
        console.log("oggetto get:", data);
        setExperience(data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <>
      <div className="d-flex flex-column ms-3 mt-3">
        <h2 className="">Esperienza</h2>
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
                <div className="ms-3">
                  <h4 className="mb-0">{r.role}</h4>
                  <p className="mb-0">{r.company}</p>
                  <p className="mb-0">
                    {r.startDate} - {r.endDate}
                  </p>
                  <p className="mb-0">{r.area}</p>
                  <p className="mt-3 mb-0">{r.description}</p>
                </div>
              </div>
              <hr className="bg-black w-100 m-0"></hr>
            </div>
          );
        })}
      </div>
      <PostExp></PostExp>
    </>
  );
};
export default Experiences;
