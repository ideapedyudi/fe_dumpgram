import { useState } from "react";

// ------------ bootstrap ----------
import { Button, Form, Modal } from 'react-bootstrap';

// -------- router -------------
import { Link } from "react-router-dom";

// ------------ register -----------
import Register from '../organisms/Register';

// ------------ style ------------
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
            <Modal show={show} onHide={handleClose} className="loginModal">
                <Modal.Header className="border-0 modal-header">
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    {/* form */}
                    <Form>
                        <Form.Control className="form-controls" type="text" placeholder="Email" /> <br />
                        <Form.Control className="form-controls" type="password" placeholder="Password" /> <br />
                        <Link to="/feedpage">
                            <Button className="btlogin" variant="primary" size="lg">
                                Login
                            </Button>
                        </Link>
                        {/* ------- Register ----- */}
                        <center className="mt-2 loginend">Don't have an account ? Klik <span className="Reg" onClick={handleModalRegister}>Here</span></center>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
