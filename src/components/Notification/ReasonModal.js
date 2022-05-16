import React, { useState } from 'react';
import { Button, Modal, Form } from "react-bootstrap";

function ReasonModal(props) {
    const [reason, setReason] = useState("");
    const rejectrequest = () => {
        if(reason!=""){
            props.handleReject(reason);
        }
    }
    return (
        <div>
        <Modal show={props.show} >
          <Modal.Body style={{ fontWeight: "bold" }}>
              {props.title}
                <Form>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>Enter Reason:</Form.Label> */}
                    <Form.Control
                        type="text"
                        value={reason} onInput={(event)=>{setReason(event.target.value)}}
                        autoFocus
                    />
                    </Form.Group>
                </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={()=>{rejectrequest()}}>
              Reject
            </Button>

            <Button variant="danger" onClick={()=>{props.closeReasonModal();}}>
              Close
            </Button>

            
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default ReasonModal;

