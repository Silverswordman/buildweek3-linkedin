import { useEffect } from "react"
import { getProfileAction } from "../redux/actions"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import AsideProfileSection from "./AsideProfileSection"
import PersonalProfile from "./PersonalProfile"


const ProfileSection = ()=>{

    const { key } = useParams()
    

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfileAction(key))
    }, [])

    

    return(
        <Container fluid>
            <Row className="justify-content-center">
                <Col md={6} className="bg-white mt-4 rounded-4 p-3 me-3">
                    <PersonalProfile queryKey={key}/>
                </Col>
                <Col md={2} className="bg-white mt-4 rounded-4">
                    <AsideProfileSection/>
                </Col>

            </Row>
        </Container>
    )
}

export default ProfileSection