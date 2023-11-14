import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileListAction } from "../redux/actions";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { LiaPlusSolid } from "react-icons/lia";

const ProfileList = () => {
  const [isHovered, setIsHovered] = useState(false);

  function changeBackground() {
    setIsHovered(true);
  }

  function resetBackground() {
    setIsHovered(false);
  }

  const dispatch = useDispatch();
  const profileList = useSelector((state) => state.profilelist.list[0]);

  useEffect(() => {
    dispatch(getProfileListAction());
  }, []);

  console.log(profileList);

  return (
    <Card>
      <Card.Body>
        <Card.Text>Persone che potresti conoscere</Card.Text>
        {profileList && profileList.length > 0
          ? profileList.slice(0, 10).map((profile) => (
              <Row key={profile._id} className="my-2">
                <Col sm={1} className="me-2">
                  <img
                    src={profile.image}
                    alt="profilepic"
                    width={35}
                    className="rounded-circle  "
                  />
                </Col>
                <Col sm={10}>
                  <Row className="flex-column">
                    <Col className=" fw-bold  ">
                      {profile.name} {profile.surname}
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
          isHovered ? "secondary-subtle text-dark" : "white"
        } text-center text-secondary  fw-bold`}
        style={{ cursor: "pointer" }}
        onMouseEnter={changeBackground}
        onMouseLeave={resetBackground}
      >
        Mostra tutte le attività <FaArrowRight />
      </Card.Footer>
    </Card>
  );
};

export default ProfileList;
