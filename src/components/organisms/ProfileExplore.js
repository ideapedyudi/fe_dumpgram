// ------------- Aos --------------
import { Row, Col, Navbar, Card } from 'react-bootstrap';

import '../style/Explore.css'

// ------------- Aos --------------
// import Aos from "aos";
import "aos/dist/aos.css"

// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faCompass } from '@fortawesome/free-regular-svg-icons';

// ------------- asset ------------
import DumbGram from '../asset/DumbGram.svg';
import Profile from '../asset/Rectangle 4.jpg';

function ProfileFeed() {
    return (
        <>
            {/* --------------------------- card profile explore -------------------------- */}
            <Navbar bg="dark" className="bar">
                <a href="/feedpage">
                    <img src={DumbGram} className="logos ms-4" alt="logo" />
                </a>
            </Navbar>
            <Card className="bg-card text-center mt-3">
                <FontAwesomeIcon className="ms-auto me-5 icon-edit" icon={faEdit} />
                <Card.Body>
                    <Card.Text>
                        <div className="circle">
                            <img src={Profile} className="logoprofile" alt="logo" />
                        </div>
                    </Card.Text>
                    <h3 className="namaprofile">Lisa</h3>
                    <p className="namagm">@alalisa_m</p>
                    <Row className="mt-4 barfollow">
                        <Col lg={4} className="panel">
                            <p>Post</p>
                            <p className="jumlah">200</p>
                        </Col>
                        <Col lg={4} className="panel">
                            <p>Followers</p>
                            <p className="jumlah">51.2 M</p>
                        </Col>
                        <Col lg={4} className="panels">
                            <p>Following</p>
                            <p className="jumlah">1</p>
                        </Col>
                    </Row>
                    <p className="bio">Rapper in Black Pink, Brand Ambasador Penshoppe</p>
                    <div class="menu">
                        <p> <a href="/feedpage" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-5 icon-feeds" icon={faHome} /><span className="title-feeds">Feed</span></a></p>
                        <p> <a href="/explorepage" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-5 icon-explores" icon={faCompass} /><span className="title-explores">Explore</span></a></p>
                    </div>

                    <div class="logout">
                        <p><FontAwesomeIcon className="ms-auto me-5 icon-logout" icon={faSignInAlt} /><span className="title-logout">Logout</span></p>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfileFeed
