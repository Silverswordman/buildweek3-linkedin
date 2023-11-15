import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";
import JobDetails from "./JobDetails";
import { useDispatch, useSelector } from "react-redux";
import { getJobsListAction } from "../redux/actions";


const Jobs = ()=>{

    const [jobList,setJobList]=useState([])
    const dispatch = useDispatch()
    const query = useSelector(state=>state.query.query)
    const key = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c`;
    const searchedJobs = useSelector(state=>state.jobs.content.data)

    const getJobs = ()=>{
        fetch('https://strive-benchmark.herokuapp.com/api/jobs',{
            headers: {
              Authorization: key,
            },
          })
          .then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('Errore nel caricamento dei dati')
            }
          })
          .then(data=>{
            // console.log(data.data)
            setJobList(data.data)
          })
    }

    useEffect(()=>{
        getJobs()
    },[])

    useEffect(()=>{
        dispatch(getJobsListAction(query))
    },[query])

    return(
   
       <Container>
        <Row>
        <Col md={8}>

            <Card className="mt-4">
            <Row>
                <Col className="text-center mt-2"><h4>Company Name</h4></Col>
                <Col className="text-center mt-2"><h4>Job Title</h4></Col>
            <Col className="text-center mt-2"><h4>Type of contract</h4></   Col>
            <Col className="text-center mt-2"><h4>Publication Date</h4></   Col>
        
                </Row>
            </Card>
            <Card className="mt-2">

                <Row className="row-cols-1">
                    {(searchedJobs && searchedJobs.length > 0 ? searchedJobs : jobList).slice(0, 25).map((el) => (
                          <Col key={el._id} className="text-center" style={{ cursor: 'pointer' }}>
                            <SingleJob key={el._id} job={el} />
                          </Col>
                        ))}

                </Row>
            </Card>
        </Col>
        <Col>
        <JobDetails/>
        </Col>
        </Row>
       </Container>
    
    )
}

export default Jobs