// ------------- Aos --------------
import { Navbar, Card, Container } from 'react-bootstrap';

// -------- router -------------
import { Link } from "react-router-dom";

// ------------ stayle ------------
import '../style/Feed.css';
import '../style/ProfileMessange.css';

// ------------- asset ------------
import DumbGram from '../asset/DumbGram.svg';
import Profile from '../asset/Rectangle 4.jpg';
import Profile2 from '../asset/zeny.png';

function ProfileMessage() {
    return (
        <>
            {/* --------------------------- card profile feed -------------------------- */}
            <Navbar bg="dark" className="bar ms-3">
                <Link to="/feedpage">
                    <img src={DumbGram} className="logos ms-4" alt="logo" />
                </Link>
            </Navbar>
            {/* message profile */} <br />
            <Container>
                <Card style={{ width: '20rem' }} className="cardchat ms-3">
                    <Link to="/ChatPage">
                        <Card.Body className="inlineChat">
                            <div class="boxprofile">
                                <Card.Img variant="top" src={Profile2} className="profilechat" />
                            </div>
                            <Card.Text className="namechat">
                                <Card.Title className="namechatpeople">zayn malik</Card.Title>
                                <span className="chatrender">Hello lisa </span>
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    <Card.Body className="inlineChat">
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
