import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import SingleJob from "./SingleJob";
import JobDetails from "./JobDetails";
import { useDispatch, useSelector } from "react-redux";
import { getJobsListAction } from "../redux/actions";
import { useLocation } from "react-router-dom";

const Jobs = ({ disableScroll, onDisableScroll }) => {
  const [jobList, setJobList] = useState([]);
  const [clickedJob, setClickedJob] = useState(null);
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c";
  const searchedJobs = useSelector((state) => state.jobs.content.data);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const getJobs = () => {
    setTimeout(() => {
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
        })
        .catch((error) => {
          console.error("Errore durante il caricamento dei dati:", error);
        })
        .then(() => {
          setLoading(false);
        });
    }, 1500);
  };

  useEffect(() => {
    // Caricamento iniziale solo quando il componente viene montato
    getJobs();
  }, []);

  useEffect(() => {
    // Caricamento quando cambia la query
    dispatch(getJobsListAction(query));
    setLoading(true);
  }, [query, location.pathname]);

  const [jobDetails, setJobDetails] = useState();

  useEffect(() => {
    if (searchedJobs) {
      setJobDetails(searchedJobs[0]);
      setLoading(false);
    }
  }, [searchedJobs]);

  const handleClick = (clickedJob) => {
    setJobDetails(clickedJob);
    setClickedJob(clickedJob._id);
  };

  return (
    <Container>
      <Row className="flex-column flex-md-row">
        <Col
          md={5}
          className="px-0 overflow-scroll vh-100 overflow-x-hidden mt-3"
          style={{ maxHeight: "90vh" }}
        >
          <Card className="mt-2 ">
            <Row className="row-cols-1 ">
              {loading && (
                <Col className="text-center m-2 border-0 ">
                  <Spinner animation="grow" variant="secondary" />
                </Col>
              )}
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
        <Col
          md={7}
          className="px-0 overflow-scroll vh-100 overflow-x-hidden"
          style={{ maxHeight: "90vh" }}
        >
          {jobDetails && <JobDetails jobDetails={jobDetails} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
