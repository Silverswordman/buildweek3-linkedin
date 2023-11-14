import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import PostExp from "./PostExp";
import format from "date-fns/format";

const Experiences = (props) => {
  const dispatch = useDispatch();
  const Experience = useSelector((state) => state.experiences.content);
const [ok,setOk] = useState(false)
  console.log(props.profileId);

  useEffect(() => {
    if (typeof props.profileId === "string" && props.profileId.trim() !== "") {
      
      dispatch(getExperiencesAction(props.profileId));
      setOk(true)
    }
  }, [dispatch, props.profileId]);

  // const getExperiences = () => {
  //   fetch(
  //     "https://striveschool-api.herokuapp.com/api/profile/" +
  //       UserId +
  //       "/experiences",
  //     {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c",
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("errore nel recuperare le informazioni");
  //       }
  //     })
  //     .then((data) => {
  //       console.log("oggetto get:", data);
  //       setExperience(data);
  //     })
  //     .catch((error) => {
  //       console.log("ERROR", error);
  //     });
  // };
  return (
    <>
      <div className="d-flex flex-column ms-3 mt-3">
        <h2 className="">Esperienza</h2>
        {ok&&Experience.map((r) => {
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
                    {format(new Date(r.startDate), "MM/dd/yyyy")} -
                    {format(new Date(r.endDate), "MM/dd/yyyy")}
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
