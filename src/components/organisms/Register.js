import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../style/Register.css';
import Login from './Login'

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

    // menyimpan
    const [product, setProduct] = useState({
        email: '',
        nama: '',
        username: '',
        password: ''
    })

    // values inputan
    const { email, nama, username, password } = product;

    // ketik
    const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }


    // ketika tombol submit di tekan
    const handleOnSubmit = (e) => {
        // validasi tidak ke url
        e.preventDefault();

        console.log(product);

        // kosongkan data
        setProduct({
            email: '',
            nama: '',
            username: '',
            password: ''
        })
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
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Control onChange={handleOnChange} name="email" value={email} className="form-controls" type="text" placeholder="Email" autocomplete="off" required /> <br />
                        <Form.Control onChange={handleOnChange} name="nama" value={nama} className="form-controls" type="text" placeholder="Name" autocomplete="off" required /> <br />
                        <Form.Control onChange={handleOnChange} name="username" value={username} className="form-controls" type="text" placeholder="Username" autocomplete="off" required /> <br />
                        <Form.Control onChange={handleOnChange} name="password" value={password} className="form-controls" type="password" placeholder="Password" autocomplete="off" required /> <br />
                        <Button className="btlogin" type="submit" variant="primary" size="lg" block>
                            Register
                        </Button>
                        <center className="mt-2 loginend">Already have an account ? Klik  <span className="log" onClick={handleLoginModal}>Here</span></center>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Register
