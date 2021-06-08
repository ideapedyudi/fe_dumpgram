import { useState } from 'react';

// -------------- bootstrap ----------------
import { Button, Form } from 'react-bootstrap';

// ------------- style ---------------
import '../style/Register.css';

// ----------- modal --------------
import Login from './Login';
import Modal from 'react-bootstrap/Modal';

function Register(props) {

    // register
    const [show, setShow] = useState(props.isOpen);
    const handleClose = () => setShow(false);

    // login
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginModal = () => {
        setShow(!show);
        setShowLogin(!showLogin);
    }

    return (
        <>
            {/* ----------- modal ---------- */}
            { showLogin ? <Login isOpen={true} /> : null}
            <Modal show={show} onHide={handleClose} className="loginRegister">
                <Modal.Header className="border-0 modal-header">
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    {/* form */}
                    <Form>
                        <Form.Control name="email" className="form-controls" type="text" placeholder="Email" autocomplete="off" required /> <br />
                        <Form.Control name="nama" className="form-controls" type="text" placeholder="Name" autocomplete="off" required /> <br />
                        <Form.Control name="username" className="form-controls" type="text" placeholder="Username" autocomplete="off" required /> <br />
                        <Form.Control name="password" className="form-controls" type="password" placeholder="Password" autocomplete="off" required /> <br />
                        <Button className="btlogin" variant="primary" size="lg" block>
                            Register
                        </Button>
                        {/* login */}
                        <center className="mt-2 loginend">Already have an account ? Klik  <span className="log" onClick={handleLoginModal}>Here</span></center>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Register
