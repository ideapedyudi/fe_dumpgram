import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import '../style/Register.css';

function Register(props) {
    const { show, handleCloseRegister } = props;

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
            <Modal show={show} onHide={handleCloseRegister}>
                <Modal.Header className="border-0 modal-header">
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    {/* form */}
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Control onChange={handleOnChange} name="email" value={email} className="form-control" type="text" placeholder="Email" /> <br />
                        <Form.Control onChange={handleOnChange} name="nama" value={nama} className="form-control" type="text" placeholder="Name" /> <br />
                        <Form.Control onChange={handleOnChange} name="username" value={username} className="form-control" type="text" placeholder="Username" /> <br />
                        <Form.Control onChange={handleOnChange} name="password" value={password} className="form-control" type="password" placeholder="Password" /> <br />
                        <Button className="btlogin" type="submit" variant="primary" size="lg" block>
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
