import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import {HiOutlinePencil} from 'react-icons/hi'
import { Link, useLocation } from "react-router-dom"

const PersonalProfile = ()=>{

    const dataProfile = useSelector(state=> state.profile.profile)
    const {pathname} = useLocation()
    // console.log(pathname)
    const isMeRoute = pathname === "/me"

    return (
      <Card className="mt-4 p-3">
        <Container>
          {dataProfile && Object.keys(dataProfile).length > 0 ? (
            <Row>
            
              <Col md={12}>
                <div>
                  <img src={dataProfile.image} alt="profile-img" width={150} className="rounded-circle" />
                </div>
              </Col>
              <Col md={12} className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                <h2>{`${dataProfile.name} ${dataProfile.surname}`}</h2>
                {isMeRoute && (
                    <Link to="/settingsprofile" className="text-decoration-none">
                      <HiOutlinePencil style={{ fontSize: '1.5em', cursor: 'pointer' }} />
                    </Link>
                  )}
                </div>
                <p className="m-0">{dataProfile.title}</p>
                <p className="m-0 text-secondary">{dataProfile.area}</p>     
              </Col>
              <Col md={12}>
                <Button variant="primary" className="rounded-5 fw-bold me-3 mt-3">Disponibile per</Button>
                <Button variant="outline-primary" className="rounded-5 fw-bold me-3 mt-3">Aggiungi sezione profilo</Button>
                <Button variant="outline-secondary" className="rounded-5 me-3 mt-3">Altro</Button>
              </Col>
            </Row>
          ) : null}
        </Container>
      </Card>
        )
}

export default PersonalProfile;
