import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const AsideProfileSection = () => {
  return (
    <Container className="p-0 mt-4">
      <Card>
        <Card.Body>
          <Card.Text className="fw-bold fs-6">Lingua del Profilo</Card.Text>
          <Card.Text>Italiano</Card.Text>
          <Card.Text className="fw-bold fs-6">Public profile & URL</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default AsideProfileSection;
