// ------------- Bootstrap --------------
import { Navbar, InputGroup, FormControl, Button, Col, Card, Container } from 'react-bootstrap';

// ----------- Explore.css ----------------
import '../style/Explore.css'
import Notifikasi from './Notifikasi';

// ------------- Aos --------------
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

// ----------- asset ------------
import Rectagle1 from '../asset/Rectangle 6.jpg';
import Rectagle2 from '../asset/Rectangle 10.jpg';
import Rectagle3 from '../asset/Rectangle 8.jpg';
import Rectagle4 from '../asset/Rectangle 13.jpg';
import Rectagle5 from '../asset/Rectangle 3.jpg';
import Rectagle6 from '../asset/Rectangle 14.jpg';

function ExploreExplore() {
    // aos duration
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <Navbar fixed="top" className="bartpostnotif">
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="cariFeeds" placeholder="Search" />
                    <p className="JudulFeed">Explore</p>
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
            {/* image expore */}
            <div className="masoryholder" data-aos="fade-up">
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle1} />
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle4} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle2} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle5} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle3} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="cardfeed">
                        <Card.Img variant="top" className="imgfeed" src={Rectagle6} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </>
    )
}

export default ExploreExplore
