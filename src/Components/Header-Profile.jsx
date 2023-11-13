import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
// import { GetProfileAction } from "../redux/actions";

function HeaderProfile() {
  const profiles = useSelector((state) => state.profiles);

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HeaderProfile;
