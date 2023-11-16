import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const HomeComments = () => {
  const [Comments, setComments] = useState([]);
  const getComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZGEzMDE1ODgwMTAwMTg2NDJjODQiLCJpYXQiOjE3MDAxMjUyMzIsImV4cCI6MTcwMTMzNDgzMn0.OldITBQRnPFb8j3LBIPOgmHzNArjzjsd8ikaf3keZ2g",
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
        console.log("commenti", data);
        setComments(data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      <Card>
        <Card.Body>
          {Comments.length > 0 ? Comments[0].comment : null}
        </Card.Body>
      </Card>
    </>
  );
};

export default HomeComments;
