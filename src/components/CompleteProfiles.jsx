import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileListAction } from "../redux/actions";
import { Card, Row, Col, Button } from "react-bootstrap";

import { LiaPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import CompleteProfileAside from "./CompleteProfileAside";

const CompleteProfileList = () => {
  //   const [isHovered, setIsHovered] = useState(false);

  //   function changeBackground() {
  //     setIsHovered(true);
  //   }

  //   function resetBackground() {
  //     setIsHovered(false);
  //   }

  const dispatch = useDispatch();
  const profileList = useSelector((state) => state.profilelist.list);

  useEffect(() => {
    dispatch(getProfileListAction());
  }, []);

  return (
    <Row className="justify-content-center">
      <Col lg={3}>
        <CompleteProfileAside />
      </Col>
      <Col lg={6}>
        <Row>
          <Card className="my-4  ">
            <Card.Body>
              <Card.Title className="fs-3 text-center">
                La tua Rete Contatti
              </Card.Title>
              {profileList && profileList.length > 0
                ? profileList.map((profile) => (
                    <Row key={profile._id} className="my-4 ms-2">
                      <Col sm={1} md={2} className="me-2">
                        <img
                          src={profile.image}
                          alt="profilepic"
                          width={80}
                          className="rounded-circle  "
                        />
                      </Col>
                      <Col sm={9} md={7} className="pe-0 ps-4">
                        <Row className="flex-column">
                          <Col className=" fw-bold  ">
                            <Link
                              to={`/${profile._id}`}
                              className="text-decoration-none  text-black fs-5"
                            >
                              {profile.name} {profile.surname}
                            </Link>
                          </Col>
                          <Col className="small my-1">{profile.title}</Col>
                        </Row>

                        <Button variant="outline-secondary text-secondary-emphasis rounded-pill px-3 py-1">
                          <LiaPlusSolid /> Segui
                        </Button>
                      </Col>
                    </Row>
                  ))
                : null}
            </Card.Body>
            {/* <Card.Footer
            className={`bg-${
              isHovered ? "#e0e0e0 text-dark" : "white"
            } text-center text-secondary  fw-bold`}
            style={{ cursor: "pointer" }}
            onMouseEnter={changeBackground}
            onMouseLeave={resetBackground}
          >
            Mostra tutto
          </Card.Footer> */}
          </Card>
        </Row>
      </Col>
    </Row>
  );
};

export default CompleteProfileList;
