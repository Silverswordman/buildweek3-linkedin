import { Card, Col, Container, Row } from "react-bootstrap";
import parse from "html-react-parser";

const JobDetails = (props) => {
  return (
    <Container className="mt-4 px-0">
      <Card className="mt-2 p-3">
        <Row className="row-cols-1">
          <Col>
            <h3>{props.jobDetails.company_name}</h3>
            <p>{props.jobDetails.title}</p>
          </Col>
          <Col>{parse(props.jobDetails.description)}</Col>
        </Row>
      </Card>
    </Container>
  );
};

export default JobDetails;
