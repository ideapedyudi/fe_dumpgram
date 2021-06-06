// ------------- Bootstrap --------------
import { Navbar, InputGroup, FormControl, Button, Container, Card } from 'react-bootstrap';

// ----------- Explore.css ----------------
import '../style/Explore.css';
import '../style/Chat.css';

// ------------- Aos --------------
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import Profile from '../asset/Rectangle 4.jpg';
import Profile2 from '../asset/zeny.png';


// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faBell } from '@fortawesome/free-regular-svg-icons';

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
                        <FontAwesomeIcon className="icon-Notifikasi" icon={faBell} />
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
            <div className="NoMassage" data-aos="fade-up">
                <Card style={{ width: '40rem' }} className="cardchat ms-3">
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <a href="/ChatPage">
                                <Card.Img variant="top" src={Profile2} className="profilechat" />
                            </a>
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai Lisa </Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <a href="/ChatPage">
                                <Card.Img variant="top" src={Profile} className="profilechat" />
                            </a>
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">lisa</Card.Title>
                            <Card.Title className="chatrender text-start">Hai zayn</Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <a href="/ChatPage">
                                <Card.Img variant="top" src={Profile2} className="profilechat" />
                            </a>
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai Lisa</Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <a href="/ChatPage">
                                <Card.Img variant="top" src={Profile} className="profilechat" />
                            </a>
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">lisa</Card.Title>
                            <Card.Title className="chatrender text-start">Hai zayn</Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <a href="/ChatPage">
                                <Card.Img variant="top" src={Profile2} className="profilechat" />
                            </a>
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai Lisa</Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <a href="/ChatPage">
                                <Card.Img variant="top" src={Profile} className="profilechat" />
                            </a>
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai zayn</Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <a href="/ChatPage">
                                <Card.Img variant="top" src={Profile2} className="profilechat" />
                            </a>
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople text-start">zayn malik</Card.Title>
                            <Card.Title className="chatrender text-start">Hai Lisa</Card.Title>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br /><br />
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
