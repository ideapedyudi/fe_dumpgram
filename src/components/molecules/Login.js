import { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';


// ------------ register -----------
import Register from '../molecules/Register'

import '../style/Login.css';

function Login(props) {

    const [show, setShow] = useState(props.isOpen);

    const handleClose = () => setShow(false);

    return (
        <>
            {/* ----------- modal ---------- */}
            <Register isOpen={true} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="border-0 modal-header">
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    {/* form */}
                    <Form>
                        <Form.Control className="form-control" type="text" placeholder="Email" /> <br />
                        <Form.Control className="form-control" type="password" placeholder="Password" /> <br />
                        <a href="/feed">
                            <Button className="btlogin" variant="primary" size="lg">
                                Login
                            </Button>
                            {/* ------- Register ----- */}
                        </a>
                        <center className="mt-2 loginend">Don't have an account ? Klik <Button variant="primary">Here</Button></center>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
