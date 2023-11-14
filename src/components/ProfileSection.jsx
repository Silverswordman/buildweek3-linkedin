import { useEffect } from "react"
import { getProfileAction } from "../redux/actions"
import { useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import AsideProfileSection from "./AsideProfileSection"
import PersonalProfile from "./PersonalProfile"
import Experiences from "./Experiences"


const ProfileSection = ()=>{

    const { key } = useParams()
    
   
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfileAction(key))
    }, [])
    
    const profileId = useSelector(state=>state.profile.profile._id)
    

    return(
        <Container fluid>
            
            <Row className="justify-content-center">
                <Col md={6} >
                    <PersonalProfile queryKey={key}/>
                    <Experiences profileId={profileId}/>
                </Col>
                <Col md={2} className="bg-white mt-4 rounded-4">
                    <AsideProfileSection/>
                </Col>

            </Row>
        </Container>
    )
}

export default ProfileSection