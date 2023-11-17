import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getPersonalProfileAction, setImageProfileAction } from "../redux/actions"


const ProfileImage = ()=>{

    const dispatch = useDispatch()
    const [selectedFile, setSelectedFile] = useState(null)
    const handleFileChange = (e)=>{
        setSelectedFile(e.target.files[0])
    }
    const handleUpload = ()=>{
        if(selectedFile){
            const formData = new FormData()
            formData.append('profile', selectedFile)
            dispatch(setImageProfileAction(profileId, formData))
          
            
        }
    }
    

    const profileImg = useSelector(state=>state.personalprofile.account.image)
    const profileId = useSelector(state=>state.personalprofile.account._id)
    return (
        <Container fluid className="mt-3 mb-4">
            <Row>
                <Col xs={4} md={3} lg={2}>
                
                    <img src={profileImg} alt="profile-img" className="rounded-circle" width={100} height={100}/>
                
                </Col>
                <Col className="d-flex align-items-center">
                <Form.Group className="me-2">
                    
                    <Form.Control type="file" onChange={handleFileChange}/>
                </Form.Group>
                <Button onClick={handleUpload}>Upload</Button>
                </Col>

            </Row>
        </Container>
    )
}

export default ProfileImage