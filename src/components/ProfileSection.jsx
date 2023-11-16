import { useEffect } from "react";
import { getProfileAction, setKeyAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import AsideProfileSection from "./AsideProfileSection";
import PersonalProfile from "./PersonalProfile";
import Experiences from "./Experiences";
import Activities from "./ActivitiesCard";
import FormazioneCard from "./FormazioneCard";
import LicenseCard from "./LicenseCard";
import CompetenzeCard from "./CompetenzeCard";
import ProfileList from "./ProfileList";
import SecondProfileList from "./SecondProfileList";

const ProfileSection = () => {
  const { key } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setKeyAction(key));
    dispatch(getProfileAction(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, key]);

  const profileId = useSelector((state) => state.profile.profile._id);

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <PersonalProfile queryKey={key} />
          <Activities />
          <Experiences profileId={profileId} />
          <FormazioneCard />
          <LicenseCard />
          <CompetenzeCard />
        </Col>
        <Col md={2} className="pe-0">
          <AsideProfileSection />
          <ProfileList />
          <SecondProfileList />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSection;
