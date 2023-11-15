import { Col, Container, Row } from "react-bootstrap";
import format from "date-fns/format";
import User from "../Assets/1660833954461.png";

const SingleJob = (props) => {
  return (
    <>
      <Container
        fluid
        onClick={() => {
          props.handleClick(props.job);
        }}
      >
        <Row className=" text-start mt-3  pb-2   ">
          <Col lg={2}>
            {" "}
            <img src={User} alt="user" width={60}></img>
          </Col>
          <Col lg={10}>
            <Row className="flex-column border-bottom">
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
              <Col className="small text-muted">
                {format(new Date(props.job.publication_date), "MM/dd/yyyy")}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleJob;
