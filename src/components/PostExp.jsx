import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useSelector } from "react-redux";

const PostExp = (props) => {
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c";

  const UserId = useSelector((state) => state.profile.profile._id);
  const [obj, setObj] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    area: "",
    description: "",
  });

  const PostData = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        UserId +
        "/experiences",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
          Authorization: key,
        },
      }
    )
      .then((events) => {
        console.log("oggetto inviato", events);
        if (events.ok) {
          alert("oggetto inviato");
          // setObj({
          //   role: "",
          //   company: "",
          //   startDate: "",
          //   endDate: "",
          //   area: "",
          //   description: "",
          // });
          props.getExperiences()
        } else {
          alert("errore");
          throw new Error("errore nel post");
        }
      })
      .catch((err) => {
        console.log("si e verificato un errore", err);
      });
  };
  return (
    <div className="m-5 w-100 d-flex justify-content-start">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          PostData();
          props.okFunction(false);
          props.underIdFunction(1);
        }}
        className="w-75"
      >
        <Form.Group className="mb-1" controlId="">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setObj({
                ...obj,
                role: e.target.value,
              });
            }}
            className="border-dark-subtle"
            type="text"
            placeholder="Ruolo di Lavoro..."
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setObj({
                ...obj,
                company: e.target.value,
              });
            }}
            className="border-dark-subtle"
            type="text"
            placeholder="Azienda..."
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setObj({
                ...obj,
                startDate: e.target.value,
              });
            }}
            className="border-dark-subtle"
            type="date"
            placeholder=""
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setObj({
                ...obj,
                endDate: e.target.value,
              });
            }}
            className="border-dark-subtle"
            type="date"
            placeholder=""
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setObj({
                ...obj,
                area: e.target.value,
              });
            }}
            className="border-dark-subtle"
            type="text"
            placeholder="Dove..."
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="">
          <Form.Label></Form.Label>
          <textarea
            onChange={(e) => {
              setObj({
                ...obj,
                description: e.target.value,
              });
            }}
            name="postContent"
            rows={4}
            cols={4}
            className="mt-4 w-100 border-dark-subtle"
          />
        </Form.Group>

        <div className="d-flex justify-content-between w-100">
          <Button variant="primary" type="submit">
            Aggiungi
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default PostExp;
