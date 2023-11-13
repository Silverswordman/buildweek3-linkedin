import { Col, Container, Form, Row } from "react-bootstrap"
import {AiOutlineRollback} from 'react-icons/ai'
import { Link } from "react-router-dom"


const SettingsProfile = ()=>{
    return(
        <Container>
            <Row className="justify-content-center">
                <Col md={8} className="bg-white rounded-4 my-4 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                    <h2>Modifica il profilo</h2>
                    <Link to="/me">
                    <AiOutlineRollback style={{fontSize:'1.5em', cursor:'pointer'}}/>
                    </Link>
                    </div>
                    <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Nome</Form.Label>
                          <Form.Control type="text" placeholder="Scrivi il tuo nome" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Cognome</Form.Label>
                          <Form.Control type="text" placeholder="Scrivi il tuo cognome" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="text" placeholder="Scrivi la tua email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" placeholder="Scrivi il tuo username" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Residenza</Form.Label>
                          <Form.Control type="text" placeholder="Scrivi la tua residenza: Città ,Regione, Nazione" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Occupazione</Form.Label>
                          <Form.Control type="text" placeholder="Scrivi che lavoro fai" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SettingsProfile