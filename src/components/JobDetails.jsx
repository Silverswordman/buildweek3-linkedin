import { Card, Col, Container, Row } from "react-bootstrap"


const JobDetails = (props)=>{
    return (
    <Container className="mt-4">
        <Card>
            <Row>
                <Col >
                <h4 className="mt-2 ms-2">Job Details</h4>
                </Col>
                
            </Row>
        </Card>
        <Card className="mt-2">
            <Row className="row-cols-1">
               
                <Col>
                <h3>{props.jobDetails.company_name}</h3>
                <p>{props.jobDetails.title}</p>
                </Col>
                <Col>
                <p>{props.jobDetails.description}</p>
                </Col>
            </Row>
        </Card>
    </Container>
        )

}

export default JobDetails