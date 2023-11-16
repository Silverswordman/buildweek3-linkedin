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
import ProfileFooter from "./ProfileFooter";

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
      <Row className="justify-content-center ">
        <Col md={7} lg={6}>
          <PersonalProfile queryKey={key} />
          <Activities />
          <Experiences profileId={profileId} />
          <FormazioneCard />
          <LicenseCard />
          <CompetenzeCard />
        </Col>
        <Col md={4} lg={2} className="pe-0">
          <AsideProfileSection />
          <ProfileList />
          <SecondProfileList />
        </Col>
      </Row>
      <ProfileFooter />
    </Container>
  );
};

export default ProfileSection;
