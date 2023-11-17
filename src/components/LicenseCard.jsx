import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiOutlinePencil } from "react-icons/hi";
import { LiaPlusSolid } from "react-icons/lia";
import { useLocation } from "react-router-dom";

const LicenseCard = () => {
  const { pathname } = useLocation();
  const isMeRoute = pathname === "/me";
  return (
    <Card className="mb-1 mt-3">
      <Card.Body className="p-4 l">
        <Card.Title>
          <Row>
            <Col lg={6} className="fw-semibold ">
              Licenze e Certificazioni
            </Col>

            <Col lg={6} className="text-end align-items-center">
              {isMeRoute && (
                <>
                
                <LiaPlusSolid
                  className=" fs-3 text-secondary me-4 "
                  style={{ cursor: "pointer" }}
                />
  
                <HiOutlinePencil
                  className=" fs-4 text-secondary  "
                  style={{ cursor: "pointer" }}
                />
                
                </>
              )}
            </Col>
          </Row>
        </Card.Title>
        <div>
          <Row className="mb-2">
            <Col lg={2}>
              {" "}
              <img
                src="http://placekitten.com/75"
                alt="kitten"
                className=""
              ></img>
            </Col>
            <Col lg={10}>
              <p className="fw-semibold fs-5 my-0 "></p>
              <p className=" my-0 small ">Certificazione Lingua Inglese</p>
              <p className=" my-0 small ">Votazione 100/100</p>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LicenseCard;
