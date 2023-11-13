import { useEffect, useState } from "react";
import PostExp from "./PostExp";

const Experiences = () => {
  const UserId = "5d84937322b7b54d848eb41b";
  const [Experience, setExperience] = useState([]);
  useEffect(() => {
    // getExperiences();
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
        <div className="d-flex m-3">
          <div>
            <img src="http://placekitten.com/75" className=""></img>
          </div>
          <div className="ms-3">
            <h4 className="mb-0">Teacher</h4>
            <p className="mb-0">EPICODE - Autonomo</p>
            <p className="mb-0">giu 2019 - Presente - 4 anni 6 mesi</p>
            <p className="mb-0">Roma, Italia</p>
            <p className="mt-3 mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in
              vero necessitatibus aliquid laboriosam voluptatibus voluptatem
              quas voluptates, modi ipsam eligendi, nobis tempore doloribus
              voluptate nam, temporibus nesciunt quibusdam neque!
            </p>
          </div>
        </div>
        <hr className="bg-black w-100 m-0"></hr>
      </div>
      <PostExp></PostExp>
    </>
  );
};
export default Experiences;
