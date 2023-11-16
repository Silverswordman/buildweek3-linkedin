import { useEffect, useState } from "react";

const HomeLeftSection = () => {
  const [postArray, setPostArray] = useState([]);
  const getPosts = () => {
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
        console.log("posts", data);
        setPostArray(data);
        console.log(postArray);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(
    () => {
      getPosts();
      console.log(postArray);
    },
    [],
    postArray
  );

  return <></>;
};
export default HomeLeftSection;
