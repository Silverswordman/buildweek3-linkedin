import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";
import JobDetails from "./JobDetails";
import { useDispatch, useSelector } from "react-redux";
import { getJobsListAction } from "../redux/actions";

const Jobs = ({ disableScroll, onDisableScroll }) => {
  const [jobList, setJobList] = useState([]);
  const [clickedJob, setClickedJob] = useState(null);
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c";
  const searchedJobs = useSelector((state) => state.jobs.content.data);

  const getJobs = () => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel caricamento dei dati");
        }
      })
      .then((data) => {
        setJobList(data.data);
      });
  };

  useEffect(() => {
    dispatch(getJobsListAction(query));
  }, [query]);

  const [jobDetails, setJobDetails] = useState();

  useEffect(() => {
    if (searchedJobs) {
      setJobDetails(searchedJobs[0]);
    }
  }, [searchedJobs]);

  const handleClick = (clickedJob) => {
    setJobDetails(clickedJob);
    setClickedJob(clickedJob._id);
  };

  return (
    <Container>
      <Row>
        <Col md={5} className="px-0 overflow-scroll vh-100 overflow-x-hidden">
          {/* <Card>
            <Row>
              <Col className="text-center mt-2">
                <h4>Company Name</h4>
              </Col>
              <Col className="text-center mt-2">
                <h4>Job Title</h4>
              </Col>
              <Col className="text-center mt-2">
                <h4>Type of contract</h4>
              </Col>
              <Col className="text-center mt-2">
                <h4>Publication Date</h4>
              </Col>
            </Row>
          </Card> */}
          <Card className="mt-2 ">
            <Row className="row-cols-1 ">
              {(searchedJobs && searchedJobs.length > 0
                ? searchedJobs
                : jobList
              )
                .slice(0, 25)
                .map((el) => (
                  <Col
                    key={el._id}
                    className="text-center"
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        clickedJob === el._id ? "#d7e9fb" : "white",
                    }}
                  >
                    <SingleJob
                      key={el._id}
                      job={el}
                      handleClick={() => handleClick(el)}
                    />
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
        <Col className="px-0 overflow-scroll vh-100 overflow-x-hidden">
          {jobDetails && <JobDetails jobDetails={jobDetails} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
