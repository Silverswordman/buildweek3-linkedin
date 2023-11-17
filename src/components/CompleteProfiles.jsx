import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileListAction } from "../redux/actions";
import { Card, Row, Col, Button } from "react-bootstrap";

import { LiaPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import CompleteProfileAside from "./CompleteProfileAside";

import Spinner from "react-bootstrap/Spinner";

const CompleteProfileList = () => {
  const [hoveredProfileId, setHoveredProfileId] = useState(null);
  const [loadingProfiles, setLoadingProfiles] = useState(true);

  const changeBackground = (profileId) => {
    setHoveredProfileId(profileId);
  };

  const resetBackground = () => {
    setHoveredProfileId(null);
  };

  const dispatch = useDispatch();
  const profileList = useSelector((state) => state.profilelist.list);

  useEffect(() => {
    dispatch(getProfileListAction());
    setLoadingProfiles(true);
  }, []);

  useEffect(() => {
    if (profileList && profileList.length > 0) {
      // Simula un ritardo di 1,5 secondi prima di impostare il caricamento su false
      const timeoutId = setTimeout(() => {
        setLoadingProfiles(false);
      }, 1500);

      // Pulisce il timeout se il componente viene smontato prima che scada il timeout
      return () => clearTimeout(timeoutId);
    }
  }, [profileList]);

  return (
    <Row className="justify-content-center">
      <Col lg={3}>
        <CompleteProfileAside />
      </Col>
      <Col lg={6}>
        <Row>
          <Card className="my-4">
            <Card.Body>
              <Card.Title className="fs-3 text-center">
                La tua Rete Contatti
              </Card.Title>
              {loadingProfiles && (
                <Col className="text-center my-4">
                  <Spinner animation="grow" />
                </Col>
              )}
              {profileList &&
                profileList.map((profile) => (
                  <Row key={profile._id} className="my-4 ms-2">
                    <Col sm={1} md={2} className="me-2">
                      <img
                        src={profile.image}
                        alt="profilepic"
                        width={80}
                        className="rounded-circle"
                      />
                    </Col>
                    <Col sm={9} md={7} className="pe-0 ps-4">
                      <Row className="flex-column">
                        <Col className="fw-semibold">
                          <Link
                            to={`/${profile._id}`}
                            className="text-decoration-none text-black fs-5"
                          >
                            <span
                              onMouseEnter={() => changeBackground(profile._id)}
                              onMouseLeave={resetBackground}
                              style={{
                                color:
                                  hoveredProfileId === profile._id
                                    ? "#007BFF"
                                    : "inherit",
                                textDecoration:
                                  hoveredProfileId === profile._id
                                    ? "underline"
                                    : "none",
                                transition: "color 0.3s, text-decoration 0.3s",
                              }}
                            >
                              {profile.name}
                            </span>{" "}
                            <span
                              onMouseEnter={() => changeBackground(profile._id)}
                              onMouseLeave={resetBackground}
                              style={{
                                color:
                                  hoveredProfileId === profile._id
                                    ? "#007BFF"
                                    : "inherit",
                                textDecoration:
                                  hoveredProfileId === profile._id
                                    ? "underline"
                                    : "none",
                                transition: "color 0.3s, text-decoration 0.3s",
                              }}
                            >
                              {profile.surname}
                            </span>
                          </Link>
                        </Col>
                        <Col className="small my-1">{profile.title}</Col>
                      </Row>

                      <Button variant="outline-secondary text-secondary-emphasis rounded-pill px-3 py-1">
                        <LiaPlusSolid /> Segui
                      </Button>
                    </Col>
                  </Row>
                ))}
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Row>
  );
};

export default CompleteProfileList;
