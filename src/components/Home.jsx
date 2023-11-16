import { Container, Row, Col } from "react-bootstrap";
import HomeMainSection from "./HomeMainSection";
import HomeLeftSection from "./HomeLeftSection";
import HomeRightSection from "./HomeRightSection";
import HomeFooter from "./HomeFooter";
import HomeComments from "./HomeComments";

const Home = () => {
  return (
    <Container>
      <Row>
        {/* <HomeComments></HomeComments> */}
        <Col md={3} className="mt-4">
          <HomeLeftSection></HomeLeftSection>
        </Col>
        <Col md={6} className="my-4">
          <HomeMainSection></HomeMainSection>
        </Col>
        <Col md={3} className="mt-4">
          <HomeRightSection></HomeRightSection>
          <HomeFooter></HomeFooter>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
