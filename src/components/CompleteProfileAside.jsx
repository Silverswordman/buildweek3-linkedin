import { Card, CardFooter, ListGroup, ListGroupItem } from "react-bootstrap";
import { HiUsers } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";

import CompleteProfileListFooter from "./CompleteProfileListFooter";

const CompleteProfileAside = () => {
  return (
    <Card className="mt-4 ">
      <Card.Body className="p-2">
        <Card.Text className="ms-2">Gestisci la tua rete</Card.Text>
        <ListGroup>
          <ListGroupItem className="border-0 text-muted ">
            <HiUsers className="fs-4 me-2" /> Collegamenti
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            <HiUser className="fs-4 me-2" /> Persone che segui e follower
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            <FaRegCalendarAlt className="fs-4 me-2" />
            Eventi
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            {" "}
            <FaRegBuilding className="fs-4 me-2" />
            Pagine
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            <FaRegNewspaper className="fs-4 me-2" />
            Newsletter
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            {" "}
            <FaHashtag className="fs-4 me-2" />
            Hashtag
          </ListGroupItem>
        </ListGroup>
        <Card.Text className="fw-semibold text-secondary mt-2 ms-2 ">
          Meno Dettagli <MdKeyboardArrowUp />
        </Card.Text>
      </Card.Body>
      <CardFooter className="bg-white">
        <CompleteProfileListFooter />
      </CardFooter>
    </Card>
  );
};
export default CompleteProfileAside;
