import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileListAction } from "../redux/actions";
import { Card, Row, Col, Button } from "react-bootstrap";

import { LiaPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const SecondProfileList = () => {
  const [isHovered, setIsHovered] = useState(false);

  function changeBackground() {
    setIsHovered(true);
  }

  function resetBackground() {
    setIsHovered(false);
  }

  const dispatch = useDispatch();
  const profileList = useSelector((state) => state.profilelist.list);

  useEffect(() => {
    dispatch(getProfileListAction());
  }, []);

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Text>Persone che potresti conoscere</Card.Text>
        {profileList && profileList.length > 0
          ? profileList.slice(13, 18).map((profile) => (
              <Row key={profile._id} className="my-3">
                <Col sm={1} className="me-2">
                  <img
                    src={profile.image}
                    alt="profilepic"
                    width={35}
                    className="rounded-circle  "
                  />
                </Col>
                <Col sm={10} className="pe-0 ps-4">
                  <Row className="flex-column">
                    <Col className=" fw-bold  ">
                      <Link
                        to={`/${profile._id}`}
                        className="text-decoration-none text-black"
                      >
                        {profile.name} {profile.surname}
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
          isHovered ? "#e0e0e0 text-dark" : "white"
        } text-center text-secondary  fw-bold`}
        style={{ cursor: "pointer" }}
        onMouseEnter={changeBackground}
        onMouseLeave={resetBackground}
      >
        Mostra tutto
      </Card.Footer>
    </Card>
  );
};

export default SecondProfileList;
