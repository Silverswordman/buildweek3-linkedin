import { useEffect } from "react";
import { getProfileAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import AsideProfileSection from "./AsideProfileSection";
import PersonalProfile from "./PersonalProfile";
import Experiences from "./Experiences";
import Activities from "./ActivitiesCard";
import Formazione from "./FormazioneCard";

const ProfileSection = () => {
  const { key } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const profileId = useSelector((state) => state.profile.profile._id);

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <PersonalProfile queryKey={key} />
          <Activities></Activities>
          <Experiences profileId={profileId} />
          <Formazione></Formazione>
        </Col>
        <Col md={2}>
          <AsideProfileSection />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSection;
