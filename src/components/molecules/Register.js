import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import '../style/Register.css';

function Register(props) {
    const { show, handleClose } = props;
    return (
        <>
            {/* ----------- modal ---------- */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="border-0 modal-header">
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    {/* form */}
                    <Form>
                        <Form.Control className="form-control" type="text" placeholder="Email" /> <br />
                        <Form.Control className="form-control" type="text" placeholder="Name" /> <br />
                        <Form.Control className="form-control" type="text" placeholder="Username" /> <br />
                        <Form.Control className="form-control" type="password" placeholder="Password" /> <br />
                        <Button className="btlogin" variant="primary" size="lg" block>
                            Register
                        </Button>
                        <center className="mt-2 loginend">Already have an account ? Klik  <a href="/login" className="linklogin">Here</a></center>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Register
