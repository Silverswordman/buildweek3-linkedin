import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import {AiOutlineRollback} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setProfileAction } from "../redux/actions"


const SettingsProfile = ()=>{

    const dispatch = useDispatch()
    
    const [data, setData] = useState({
      name: '',
      surname:'',
      email:'',
      bio:'',
      title:'',
      area:'',
      image:'',
      username:''
    })
    const key = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c`;

    const getProfileData = ()=>{
      fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: {
          Authorization: key,
        },
      })
      .then(res=>{
        if(res.ok){
          return res.json()
        } else {
          throw new Error('Errore nel caricamento dei dati')
        }
      })
      .then(data=>{
        console.log(data)
        setData(data)
        
      })
      .catch(err=>{
        console.log(err)
      })
    }

    useEffect(()=>{
      getProfileData()
    },[])


    const handleFormSubmit = (e)=>{
      e.preventDefault()
      dispatch(setProfileAction(data))
      console.log('invio')
    }

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
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nome</Form.Label>
                          <Form.Control type="text" value={data.name} onChange={(e)=>setData({...data, name: e.target.value})} placeholder="Scrivi il tuo nome" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Cognome</Form.Label>
                          <Form.Control type="text" value={data.surname} onChange={(e)=>setData({...data, surname: e.target.value})}placeholder="Scrivi il tuo cognome" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="text" value={data.email} onChange={(e)=>setData({...data, email: e.target.value})} placeholder="Scrivi la tua email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" value={data.username} onChange={(e)=>setData({...data, username: e.target.value})} placeholder="Scrivi il tuo username" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Residenza</Form.Label>
                          <Form.Control type="text" value={data.area} onChange={(e)=>setData({...data, area: e.target.value})} placeholder="Scrivi la tua residenza: Città ,Regione, Nazione" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Occupazione</Form.Label>
                          <Form.Control type="text" value={data.title} onChange={(e)=>setData({...data, title: e.target.value})} placeholder="Scrivi che lavoro fai" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Immagine profilo</Form.Label>
                          <Form.Control type="text" value={data.image} onChange={(e)=>setData({...data, image: e.target.value})} placeholder="Metti l'url dell'immagine" />
                        </Form.Group>
                        <Button type="submit">Invio dati</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SettingsProfile