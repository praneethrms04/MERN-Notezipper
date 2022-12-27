import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import MainScreen from "../../components/MainScreen";

import "./mynotes.css";

const Mynotes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  // console.log(notes);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ?")) {
    }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <div>
        <p onClick={decoratedOnClick}>{children}</p>
      </div>
    );
  }

  return (
    <div>
      <MainScreen title="Welcome Back Praneeth" />
      <div>
        <Container>
          <div className="pb-3">
            <Button>create a note</Button>
          </div>
          {notes.map((note) => (
            <Accordion defaultActiveKey="0">
              <Card className="mb-3" key={note._id}>
                <Card.Header>
                  <CustomToggle eventKey="1">
                    <div className="d-flex">
                      <span
                        style={{
                          color: "black",
                          textDecoration: "none",
                          flex: 1,
                          cursor: "pointer",
                        }}
                        className="mt-1"
                      >
                        {note.title}
                      </span>
                      <div>
                        <Button className="me-2" size="sm">
                          Edit
                        </Button>
                        <Button
                          className="btn btn-danger"
                          size="sm"
                          onClick={() => deleteHandler(note._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <h4>
                      <Badge className="bg-success" size="sm">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Mynotes;
