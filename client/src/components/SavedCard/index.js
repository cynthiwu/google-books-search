import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Component for saved books.
function SavedCard(props) {
  return (
    <Container>
      <Row>
        <div className="card" key={props.id}>
          <h3 className="card-title ml-3 mt-3">{props.title}</h3>
          <h5 className="card-author ml-3">{props.authors}</h5>
          <div className="card-body">
            <Col sm="1">
              <img
                className="thumbnail"
                src={process.env.PUBLIC_URL + props.image}
              />
            </Col>
            <Col sm="8">
              <p className="float-right">{props.description}</p>
            </Col>
            <div>
              <a
                type="button"
                className="btn btn-info m-1"
                href={props.link}
                target="_blank"
              >
                View
              </a>
              <button
                type="button"
                class="btn btn-danger m-1"
                onClick={() => props.handleDelete(props._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default SavedCard;
