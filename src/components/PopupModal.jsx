import { Modal } from "react-bootstrap";
import { BsLink45Deg } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import styled from "styled-components";
import Button from "../components/CustomButtons";
import Input from "../components/Input";

const StyledModal = styled(Modal)`
  font-size: 1.7rem;

  & p {
    margin-top: 15px;
  }

  & span {
    margin-left: 10px;
  }

  & .modal-body {
    padding: 10px 20px;
  }

  button.close > span {
    font-size: 25px;
    margin-right: 10px;
  }
`;

const PopupModel = ({ title, show, onHide }) => (
  <StyledModal centered size="lg" show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <MdAccountCircle size="3rem" />
      <span>email id</span>

      <Input placeholder="Enter Your Question" />
      <div className="link">
        <BsLink45Deg size="25px" />
        <Input placeholder="Optionally add link" />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button answerButton onClick={onHide}>
        Add Question
      </Button>
    </Modal.Footer>
  </StyledModal>
);

export default PopupModel;
