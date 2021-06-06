
// ------------- Bootstrap --------------
import { Navbar, InputGroup, FormControl, Button, Col, Card, Container } from 'react-bootstrap';

// ----------- feed.css ----------------
import Notifikasi from './Notifikasi';
import '../style/Feed.css'

// ------------- Aos -----------------
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from 'react';

import DetailFeed from './DetailFeed'

// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

// ----------- asser ------------
import Rectagle1 from '../asset/Rectangle 6.jpg';
import Rectagle2 from '../asset/Rectangle 10.jpg';
import Rectagle3 from '../asset/Rectangle 8.jpg';
import Rectagle4 from '../asset/Rectangle 13.jpg';
import Rectagle5 from '../asset/Rectangle 3.jpg';
import Rectagle6 from '../asset/Rectangle 14.jpg';
import zayn from '../asset/zeny.png'

function FeedFeed() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // aos duration
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            {/* navbar feed */}
            <Navbar fixed="top" className="bartpostnotif">
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="cariFeeds" placeholder="Search" />
                    <p className="JudulFeed">Feed</p>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Notifikasi />
                        <a href="/MessagePage"><FontAwesomeIcon className="icon-Notifikasi" icon={faPaperPlane} /></a>
                        <Navbar.Text>
                            <a href="/CreatePostPage">
                                <Button className="button-post"><span className="plusquar"><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span> &nbsp;<span className="create">Create Post</span></Button>
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* image feed */}
            <div className="masoryholder" data-aos="fade-up">
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle1} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="#home" className="card-box-profile">
                                        <img src={zayn} className="card-profiles" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle4} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="#home" className="card-box-profile">
                                        <img src={zayn} className="card-profiles" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed cursorfeed" onClick={handleShow} src={Rectagle2} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="#home" className="card-box-profile">
                                        <img src={zayn} className="card-profiles" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">156.290 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle5} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="#home" className="card-box-profile">
                                        <img src={zayn} className="card-profiles" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle3} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="#home" className="card-box-profile">
                                        <img src={zayn} className="card-profiles" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon paper" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">136.000 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle6} />
                        <Card.Body>
                            <Card.Text className="card-bodys">
                                <Navbar class="prof-box">
                                    <Navbar.Brand href="#home" className="card-box-profile">
                                        <img src={zayn} className="card-profiles" alt="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Text className="ms-auto">
                                        <FontAwesomeIcon className="card-icon heart" icon={faHeart} />
                                        <FontAwesomeIcon className="card-icon comment" icon={faComment} />
                                        <FontAwesomeIcon className="card-icon" icon={faPaperPlane} />
                                    </Navbar.Text>
                                </Navbar>
                                <p className="nama-post">zayn</p>
                            </Card.Text>
                            <Navbar className="navlike">
                                <Navbar.Text className="ms-auto">
                                    <p className="jmllike">126.100 Like</p>
                                </Navbar.Text>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            <DetailFeed show={show} handleClose={handleClose} />
            <br />
            <br />
        </>
    )
}

export default FeedFeed
