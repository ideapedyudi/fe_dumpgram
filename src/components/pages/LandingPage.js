// ---------- bootstrap -----------
import { Jumbotron, Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import '../style/LandingPage.css';
import { useEffect, useState } from "react";
// ------------- Aos --------------
import Aos from "aos";
import "aos/dist/aos.css"

// ------------- asset ------------
import DumbGram from '../asset/DumbGram.svg';
import Rectagle1 from '../asset/Rectangle 6.jpg';
import Rectagle2 from '../asset/Rectangle 3.jpg';
import Rectagle3 from '../asset/Rectangle 4.jpg';
import Rectagle4 from '../asset/Rectangle 5.jpg';
import Rectagle5 from '../asset/Rectangle 9.jpg';
import Rectagle6 from '../asset/Rectangle 8.jpg';
import Rectagle7 from '../asset/Rectangle 10.jpg';
import Rectagle8 from '../asset/Rectangle 12.jpg';

// ------------ register -----------
import Register from '../molecules/Register'

// ------------ login -----------
import Login from '../molecules/Login';

function LandingPage() {

    // register
    const [showRegister, setRegister] = useState(false);
    const handleCloseRegister = () => setRegister(false);
    const handleShowRegister = () => setRegister(true);

    // login
    const [showLogin, setLogin] = useState(false);
    const handleCloseLogin = () => setLogin(false);
    const handleShowLogin = () => setLogin(true);


    // aos duration
    useEffect(() => {
        Aos.init({ duration: 900 });
    }, [])
    return (
        <div>
            {/* ------------------------------------------- pembuka jumbotron page ------------------------------------------ */}
            <Jumbotron>
                <Container>
                    <Row>
                        {/* ------- text ----- */}
                        <Col lg={5} className="kiri" data-aos="fade-right">
                            <Navbar.Brand>
                                <img src={DumbGram} className="logo" alt="logo" />
                            </Navbar.Brand> <br /><br /><br />

                            <p class="title">Share your best <br /> photos or videos</p>
                            <p className="kidstitle">
                                Join now, share your creations with another <br /> people and enjoy other creations.
                            </p>
                            <p className="mt-4">
                                <Button className="btnlogin ml-4" variant="primary" onClick={handleShowLogin}>Login</Button> <Button className="Register" onClick={handleShowRegister}>Register</Button>

                                {/* ------- Register ----- */}
                                <Register show={showRegister} handleClose={handleCloseRegister} />

                                {/* ------- Login ----- */}
                                <Login show={showLogin} handleClose={handleCloseLogin} />
                            </p>
                        </Col>
                        {/* ------- gambar ----- */}
                        <Col lg={7}>
                            <Row data-aos="zoom-in">
                                <Col lg={4}>
                                    <img src={Rectagle1} className="Rectagle1" alt="logo" />
                                </Col>

                                <Col lg={4}>
                                    <img src={Rectagle2} className="Rectagle2" alt="logo" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Rectagle3} className="Rectagle3" alt="logo" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Rectagle4} className="Rectagle4" alt="logo" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Rectagle5} className="Rectagle5" alt="logo" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Rectagle6} className="Rectagle6" alt="logo" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Rectagle7} className="Rectagle7" alt="logo" />
                                </Col>
                                <Col lg={4}>
                                    <img src={Rectagle8} className="Rectagle8" alt="logo" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            {/* ------------------------------------------- penutup jumbotron page ------------------------------------------ */}
        </div >
    )
}

export default LandingPage
