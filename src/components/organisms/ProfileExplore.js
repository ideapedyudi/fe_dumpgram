// ------------- Aos --------------
import { Row, Col, Navbar, Card } from 'react-bootstrap';

// -------- router -------------
import { Link } from "react-router-dom";

// ------------ style -------------
import '../style/Explore.css';

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
                <Link to="/feedpage">
                    <img src={DumbGram} className="logos ms-4" alt="logo" />
                </Link>
            </Navbar>
            <Card className="bg-card text-center mt-3">
                <Link to="/EditProfilePage" className="ms-auto">
                    <FontAwesomeIcon className="ms-auto icon-edit me-5" icon={faEdit} />
                </Link>
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
                        <p> <Link to="/feedpage" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-5 icon-feeds" icon={faHome} /><span className="title-feeds">Feed</span></Link></p>
                        <p> <Link to="/explorepage" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-5 icon-explores" icon={faCompass} /><span className="title-explores">Explore</span></Link></p>
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
