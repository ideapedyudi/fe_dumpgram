// ------------- Bootstrap --------------
import { Navbar, InputGroup, FormControl, Button, Container, Card } from 'react-bootstrap';

// -------- router -------------
import { Link } from "react-router-dom";

// ----------- Explore.css ----------------
import Notifikasi from './Notifikasi';

// ------------ style --------------
import '../style/Explore.css';
import '../style/Chat.css';

// ------------- Aos --------------
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// ------------- asset ------------
import Profile from '../asset/Rectangle 4.jpg';
import Profile2 from '../asset/zeny.png';


// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function Chat() {
    // aos duration
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <Navbar fixed="top" className="bartpostnotif navbarchat">
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="cariFeeds" placeholder="Search" />
                    <Navbar.Collapse className="justify-content-end">
                        <Notifikasi />
                        <Link to="/MessagePage"><FontAwesomeIcon className="icon-Notifikasi" icon={faPaperPlane} /></Link>
                        <Navbar.Text>
                            <Link to="/CreatePostPage">
                                <Button className="button-post"><span className="plusquar"><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span> &nbsp;<span className="create">Create Post</span></Button>
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* image expore */}
            <div className="NoMassage">
                <Card style={{ width: '53rem' }} className="cardchat ms-3">
                    <Card.Body className="inlinechat" data-aos="fade-up">
                        <div class="boxproFile">
                            <Card.Img variant="top" src={Profile2} className="profileChat" />
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai Lisa </Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat chatme justify-content-end mtMe pt-1" data-aos="fade-up">
                        <Card.Text className="namechat me-3">
                            <Card.Title className="namechatpeople text-end">Saya</Card.Title>
                            <Card.Title className="chatrender text-start">Hai zayn ada apa</Card.Title>
                        </Card.Text>
                        <div class="boxproFile">
                            <Card.Img variant="top" src={Profile} className="profileChat" />
                        </div>
                    </Card.Body>
                    <Card.Body className="inlinechat pt-1" data-aos="fade-up">
                        <div class="boxproFile">
                            <Card.Img variant="top" src={Profile2} className="profileChat" />
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai Lisa</Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat chatme justify-content-end pt-1" data-aos="fade-up">
                        <Card.Text className="namechat me-3">
                            <Card.Title className="namechatpeople text-end">Saya</Card.Title>
                            <Card.Title className="chatrender text-start">Hai zayn ada apa</Card.Title>
                        </Card.Text>
                        <div class="boxproFile">
                            <Card.Img variant="top" src={Profile} className="profileChat" />
                        </div>
                    </Card.Body>
                    <Card.Body className="inlinechat pt-1" data-aos="fade-up">
                        <div class="boxproFile">
                            <Card.Img variant="top" src={Profile2} className="profileChat" />
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai Lisa</Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat chatme justify-content-end pt-1" data-aos="fade-up">
                        <Card.Text className="namechat me-3">
                            <Card.Title className="namechatpeople text-end">Saya</Card.Title>
                            <Card.Title className="chatrender text-start">Hai zayn ada apa</Card.Title>
                        </Card.Text>
                        <div class="boxproFile">
                            <Card.Img variant="top" src={Profile} className="profileChat" />
                        </div>
                    </Card.Body>
                    <Card.Body className="inlinechat pt-1" data-aos="fade-up">
                        <div class="boxproFile">
                            <Card.Img variant="top" src={Profile2} className="profileChat" />
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai Lisa</Card.Title>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br /><br /><br />
            </div>
            <Navbar fixed="bottom" className="massegae">
                <Container>
                    <FormControl className="barmassage" placeholder="Send Message" />
                </Container>
            </Navbar>
        </>
    )
}

export default Chat
