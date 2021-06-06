import { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';


// ------------ register -----------
import Register from '../organisms/Register'

import '../style/Login.css';

function Login(props) {

    const [show, setShow] = useState(props.isOpen);

    const handleClose = () => setShow(false);

    // register
    const [showRegisterModal, setRegisterModal] = useState(false);
    const handleModalRegister = () => {
        setShow(!show);
        setRegisterModal(!showRegisterModal);
    }

    return (
        <>
            {/* ----------- modal ---------- */}
            { showRegisterModal ? <Register isOpen={true} /> : null}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="border-0 modal-header">
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    {/* form */}
                    <Form>
                        <Form.Control className="form-controls" type="text" placeholder="Email" /> <br />
                        <Form.Control className="form-controls" type="password" placeholder="Password" /> <br />
                        <a href="/feedpage">
                            <Button className="btlogin" variant="primary" size="lg">
                                Login
                            </Button>
                            {/* ------- Register ----- */}
                        </a>
                        <center className="mt-2 loginend">Don't have an account ? Klik <span className="Reg" onClick={handleModalRegister}>Here</span></center>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
