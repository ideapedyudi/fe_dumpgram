// ------------- Aos --------------
import { Navbar, Card, Container } from 'react-bootstrap';

import '../style/Feed.css'
import '../style/ProfileMessange.css'

// ------------- Aos --------------
// import Aos from "aos";
import "aos/dist/aos.css"

// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

// ------------- asset ------------
import DumbGram from '../asset/DumbGram.svg';
import Profile from '../asset/Rectangle 4.jpg';
import Profile2 from '../asset/zeny.png';

function ProfileMessage() {
    return (
        <>
            {/* --------------------------- card profile feed -------------------------- */}
            <Navbar bg="dark" className="bar ms-3">
                <a href="/feedpage">
                    <img src={DumbGram} className="logos ms-4" alt="logo" />
                </a>
            </Navbar>
            {/* message profile */} <br />
            <Container>
                <Card style={{ width: '20rem' }} className="cardchat ms-3">
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <a href="/ChatPage">
                                <Card.Img variant="top" src={Profile2} className="profilechat" />
                            </a>
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople">zayn malik</Card.Title>
                            <span className="chatrender">Hello lisa </span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="inlinechat">
                        <div class="boxprofile">
                            <Card.Img variant="top" src={Profile} className="profilechat" />
                        </div>
                        <Card.Text className="namechat">
                            <Card.Title className="namechatpeople">beach_lover</Card.Title>
                            <span className="chatrender">Hello lisa, when do you go to the beach</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ProfileMessage
