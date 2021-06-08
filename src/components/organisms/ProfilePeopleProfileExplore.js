// ------------- Aos --------------
import { Row, Col, Navbar, Card, Button } from 'react-bootstrap';

// -------- router -------------
import { Link } from "react-router-dom";

// -------------- style -------------
import '../style/ProfilePeople.css';

// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

// ------------- asset ------------
import DumbGram from '../asset/DumbGram.svg';
import Profile from '../asset/zeny.png';

function ProfilPeopleProfilFeed() {
    return (
        <>
            {/* --------------------------- card profile people explore -------------------------- */}
            <Navbar bg="dark" className="bar logogram">
                <Link to="/feedpage">
                    <img src={DumbGram} className="logos ms-4 mt-5" alt="logo" />
                </Link>
            </Navbar>
            <Card className="bg-card text-center mt-3">
                <Card.Body>
                    <Card.Text>
                        <div className="circle mt-4">
                            <img src={Profile} className="logoprofile" alt="logo" />
                        </div>
                    </Card.Text>
                    <h3 className="namaprofile">Zayn Malik</h3>
                    <p className="namagm">@zayn</p>
                    <Button className="messege">Message</Button> &nbsp;&nbsp;<Button className="Unfollow">Unfollow</Button>
                    <Row className="mt-4 barfollow">
                        <Col lg={4} className="panel">
                            <p>Post</p>
                            <p className="jumlah">143</p>
                        </Col>
                        <Col lg={4} className="panel">
                            <p>Followers</p>
                            <p className="jumlah">40.5 M</p>
                        </Col>
                        <Col lg={4} className="panels">
                            <p>Following</p>
                            <p className="jumlah">28</p>
                        </Col>
                    </Row>
                    <p className="bio">Nobody is Listening Out Now! www.inzayn.com</p>
                    <div class="menus">
                        <p> <Link to="/ProfilePeopleFeed" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-5 icon-feeds" icon={faHome} /><span className="title-feeds">Feed</span></Link></p>
                        <p> <Link to="/ProfilePeopleExplore" className="title-feed-a"><FontAwesomeIcon className="ms-auto me-5 icon-explores" icon={faCompass} /><span className="title-explores">Explore</span></Link></p>
                    </div>

                    <div class="logoutPeople">
                        <p><FontAwesomeIcon className="ms-auto me-5 icon-logout" icon={faSignInAlt} /><span className="title-logout">Logout</span></p>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfilPeopleProfilFeed

