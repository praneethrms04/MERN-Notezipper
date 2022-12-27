import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title }) => {
  return (
    <Container>
      <Row>
        <div className="display-5 pt-3 mb-3">
          <p>{title}</p>
        </div>
        <hr />
      </Row>
    </Container>
  );
};

export default MainScreen;
