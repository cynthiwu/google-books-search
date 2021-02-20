import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Component for search result cards.
function SearchCard(props) {
  return (
    <Container>
      <Row>
        <div className="card">
          <h3 className="card-title ml-4 mt-3">{props.title}</h3>
          <h5 className="card-author ml-4">{props.authors}</h5>

          <div className="card-body">
            <Row>
              <Col sm="2">
                <img
                  className="thumbnail m-2"
                  src={process.env.PUBLIC_URL + props.image}
                />
              </Col>
              <Col sm="7">
                <p className="description">{props.description}</p>
              </Col>
              <Col sm="3">
                <div className=" buttons">
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
                    className="btn btn-success m-1"
                    onClick={() => props.handleSave(props._id)}
                  >
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default SearchCard;
