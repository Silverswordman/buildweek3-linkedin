import { Card, Col, Container, Row } from "react-bootstrap";
import parse from "html-react-parser";
import { HiArrowUturnRight } from "react-icons/hi2";
import { HiDotsHorizontal } from "react-icons/hi";

const JobDetails = (props) => {
  return (
    <Container className="mt-4 px-0">
      <Card className="mt-2 p-3">
        <Row className="row-cols-1">
          <Col>
            <Row>
              <Col>
                <h3>{props.jobDetails.company_name}</h3>{" "}
              </Col>
              <Col className="text-end">
                <HiArrowUturnRight className="fs-3 text-muted me-2" />
                <HiDotsHorizontal className="fs-3 text-muted" />
              </Col>
            </Row>

            <p>{props.jobDetails.title}</p>
          </Col>
          <Col>{parse(props.jobDetails.description)}</Col>
        </Row>
      </Card>
    </Container>
  );
};

export default JobDetails;
