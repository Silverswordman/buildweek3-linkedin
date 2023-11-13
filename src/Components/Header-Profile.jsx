import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { GetProfileAction } from "../redux/actions";

function HeaderProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProfileAction());
  }, []);

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> NAME</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HeaderProfile;
