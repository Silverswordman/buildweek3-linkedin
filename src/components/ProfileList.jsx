import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileListAction } from "../redux/actions";
import { Card, Row, Col, Button } from "react-bootstrap";

import { LiaPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const ProfileList = () => {
  const [hoveredProfileId, setHoveredProfileId] = useState(null);

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
  }, []);

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Text>Altri Profili Consultati</Card.Text>
        {profileList && profileList.length > 0
          ? profileList.slice(0, 10).map((profile) => (
              <Row key={profile._id} className="my-3">
                <Col sm={1} className="me-2">
                  <img
                    src={profile.image}
                    alt="profilepic"
                    width={35}
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
          hoveredProfileId ? "#e0e0e0 text-dark" : "white"
        } text-center text-secondary fw-semibold`}
        style={{ cursor: "pointer" }}
        onMouseEnter={() => changeBackground("footer")}
        onMouseLeave={resetBackground}
      >
        Mostra tutto
      </Card.Footer>
    </Card>
  );
};

export default ProfileList;
