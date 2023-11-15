import { Col, Container, Row } from "react-bootstrap";
import format from "date-fns/format";

const SingleJob = (props) => {
  return (
    <>
      <Container
        fluid
        onClick={() => {
          props.handleClick(props.job);
        }}
      >
        <Row className=" text-start mt-3 border-bottom pb-2 flex-column ">
          <Col className="text-primary fw-bold ">{props.job.title}</Col>
          <Col>
            <div>{props.job.company_name}</div>
            <div className="text-muted ">
              <small>
                <em>{props.job.candidate_required_location}</em>
              </small>
            </div>
          </Col>
          <Col>{props.job.job_type ? props.job.job_type : "//"}</Col>
          <Col>
            {format(new Date(props.job.publication_date), "MM/dd/yyyy")}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleJob;
