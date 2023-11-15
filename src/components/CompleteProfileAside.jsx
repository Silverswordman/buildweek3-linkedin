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
        <Card.Text>Gestisci la tua rete</Card.Text>
        <ListGroup>
          <ListGroupItem className="border-0 text-muted">
            <HiUsers className="fs-4 me-1" /> Collegamenti
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            <HiUser className="fs-4 me-1" /> Persone che segui e follower
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            <FaRegCalendarAlt className="fs-4 me-1" />
            Eventi
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            {" "}
            <FaRegBuilding className="fs-4 me-1" />
            Pagine
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            <FaRegNewspaper className="fs-4 me-1" />
            Newsletter
          </ListGroupItem>
          <ListGroupItem className="border-0 text-muted">
            {" "}
            <FaHashtag className="fs-4 me-1" />
            Hashtag
          </ListGroupItem>
        </ListGroup>
        <Card.Text className="fw-bold text-secondary mt-2 ">
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
