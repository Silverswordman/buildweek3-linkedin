import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileListAction } from "../redux/actions";
import { Card, Row, Col, Button } from "react-bootstrap";

import { LiaPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const ProfileList = () => {
  const [hoveredProfileId, setHoveredProfileId] = useState(null);
  const [hoveredShowAll, setHoveredShowAll] = useState(false);

  const changeBackgroundProfileId = (profileId) => {
    setHoveredProfileId(profileId);
  };

  const resetBackgroundProfileId = () => {
    setHoveredProfileId(null);
  };

  const changeBackgroundShowAll = () => {
    setHoveredShowAll(true);
  };

  const resetBackgroundShowAll = () => {
    setHoveredShowAll(false);
  };

  const dispatch = useDispatch();
  const profileList = useSelector((state) => state.profilelist.list);

  useEffect(() => {
    dispatch(getProfileListAction());
  }, []);

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Text className="fw-semibold">Altri Profili Consultati</Card.Text>
        {profileList && profileList.length > 0
          ? profileList.slice(0, 10).map((profile) => (
              <Row key={profile._id} className="my-3">
                <Col sm={1} className="me-2">
                  <img
                    src={profile.image}
                    alt="profilepic"
                    width={35}
                    height={35}
                    className="rounded-circle"
                  />
                </Col>
                <Col sm={10} className="pe-0 ps-4">
                  <Row className="flex-column">
                    <Col className="fw-semibold">
                      <Link
                        to={`/${profile._id}`}
                        className="text-decoration-none text-black"
                      >
                        <span
                          onMouseEnter={() =>
                            changeBackgroundProfileId(profile._id)
                          }
                          onMouseLeave={resetBackgroundProfileId}
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
                          {profile.name} {profile.surname}
                        </span>
                      </Link>
                    </Col>
                    <Col className="small">{profile.title}</Col>
                  </Row>

                  <Button variant="outline-secondary text-secondary-emphasis rounded-pill px-3 py-1">
                    <LiaPlusSolid /> Segui
                  </Button>
                </Col>
              </Row>
            ))
          : null}
      </Card.Body>
      <Card.Footer
        className={`bg-${
          hoveredShowAll ? "#e0e0e0 text-dark" : "white"
        } text-center text-secondary fw-semibold`}
        style={{ cursor: "pointer" }}
        onMouseEnter={changeBackgroundShowAll}
        onMouseLeave={resetBackgroundShowAll}
      >
        <Link
                to="/profile"
                className=" fw-semibold   text-secondary text-decoration-none "
              >
                Mostra Tutto
              </Link>
      </Card.Footer>
    </Card>
  );
};

export default ProfileList;
