import {
  Card,
  
  CardFooter,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

import CompleteProfileListFooter from "./CompleteProfileListFooter";

const CompleteProfileAside = () => {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Text>Gestisci la tua rete</Card.Text>
        <ListGroup>
          <ListGroupItem className="border-0 text-muted">
            Collegati
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            Persone che segui e follower
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">Eventi</ListGroupItem>
          <ListGroupItem className="border-0 text-muted">Pagine</ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            Newsletter
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">Hashtag</ListGroupItem>
        </ListGroup>
        <Card.Text className="fw-bold">Meno Dettagli</Card.Text>
      </Card.Body>
      <CardFooter className="bg-white">
        <CompleteProfileListFooter />
      </CardFooter>
    </Card>
  );
};
export default CompleteProfileAside;
