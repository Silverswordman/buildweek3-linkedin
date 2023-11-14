import { useEffect } from "react";
import { getProfileAction } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import AsideProfileSection from "./AsideProfileSection";
import PersonalProfile from "./PersonalProfile";
import Activities from "./ActivitiesCard";

const ProfileSection = () => {
  const { key } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction(key));
  }, []);

  return (
    <Container fluid className="pt-4 ">
      <Row className="justify-content-center">
        <Col md={6} className="pe-1">
          <PersonalProfile />
          <Activities />
        </Col>
        <Col md={2}>
          <AsideProfileSection />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSection;
