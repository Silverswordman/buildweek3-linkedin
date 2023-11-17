import { Container, Form, FormGroup, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProfilePic from "../Assets/1660833954461.png";

const Comments = (props) => {
  const comments = useSelector((state) => state.comments.content);

  const postComments = comments.filter(
    (el) => el.elementId === props.profileId
  );

  // console.log(postComments)
  console.log(postComments);

  return (
    <>
      {postComments.map((el) => {
        return (
          <>
            <Container className="">
              <Row className="">
                <div className="col-1 ">
                  <img
                    src={ProfilePic}
                    alt="kitten"
                    width={50}
                    height={50}
                    className="rounded-circle"
                  ></img>
                </div>
                <div className="col-11  ">
                  <div className="bg-light rounded px-2 py-0 ">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className=" fw-semibold mb-0">{el.author}</p>
                      <p className="text-secondary Fs-8 mb-0 pt-2">
                        1 week ago
                      </p>
                    </div>
                    <p className="text-secondary Fs-8">Web Developer</p>
                    <p className="px-1 py-2 mb-0">{el.comment}</p>
                  </div>
                  <div className="mb-3">
                    <span className="text-secondary mx-1 ">Consiglia</span>
                    <span className="text-secondary mx-1 "> | </span>
                    <span className="text-secondary mx-1 ">Rispondi</span>
                  </div>
                </div>
              </Row>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default Comments;
