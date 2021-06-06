// ------------- Bootstrap -------------
import { Modal, Card, Col, Row, Form, Navbar, Container } from 'react-bootstrap';

// ------------ style -------------
import '../style/DetailFeed.css'

import Rectagle2 from '../asset/Rectangle 10.jpg';
import Profile from '../asset/zeny.png';
import ProfileComent from '../asset/Rectangle 4.jpg';


// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';



function DetailFeed(props) {

    const { show, handleClose } = props;

    return (
        <div>
            {/* ------------------------------ modal detail feed ------------------------------ */}
            <Modal show={show} onHide={handleClose} className="modalleft">
                <Modal.Body className="modallg">
                    <Row>
                        {/* feed gambar */}
                        <Col lg={7} className="gambarfeed">
                            <Card style={{ width: '18rem' }} className="bgcard">
                                <Card.Img variant="top" src={Rectagle2} className="gambardetail" />
                            </Card>
                        </Col>
                        {/* feed coment */}
                        <Col lg={4}>
                            <Card style={{ width: '17rem' }} className="cardcoment">
                                <div className="circlement">
                                    <a href="/ProfilePeopleFeed">
                                        <Card.Img variant="top" src={Profile} className="profilement mlprof" />
                                    </a>
                                    <p className="nameprofilement">Zayn</p>
                                </div>
                                <p className="captioncoment">To Begin Again</p>
                                <hr className="garis" />
                                {/* ----- coment ---- */}
                                <div className="circlement">
                                    <Card.Img variant="top" src={ProfileComent} className="profilement" />
                                    <p className="nameprofilement">Lisa</p>
                                </div>
                                <p className="captioncoment">Nice Place</p>
                                <div className="circlement">
                                    <Card.Img variant="top" src={ProfileComent} className="profilement" />
                                    <p className="nameprofilement">Lisa</p>
                                </div>
                                <p className="captioncoment">Good Vibe</p>
                                <Form className="inputcoment">
                                    <Navbar className="iconment">
                                        <Container>
                                            <Navbar.Collapse className="justify-content-end">
                                                <Navbar.Text className="icon3">
                                                    <FontAwesomeIcon className="card-icon heart hearts" icon={faHeart} />
                                                    <FontAwesomeIcon className="card-icon comment comments" icon={faComment} />
                                                    <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                                </Navbar.Text>
                                            </Navbar.Collapse>
                                        </Container>
                                    </Navbar>
                                    <Navbar>
                                        <Container>
                                            <Navbar.Collapse className="justify-content-end">
                                                <Navbar.Text className="likements">
                                                    <span>156.290 Like</span>
                                                </Navbar.Text>
                                            </Navbar.Collapse>
                                        </Container>
                                    </Navbar>
                                    <Form.Control className="form-controls inputcoment" type="text" placeholder="Comment" /> <br />
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default DetailFeed
