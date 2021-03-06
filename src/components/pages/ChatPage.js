// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- profile feed ------------
import ProfileMessage from '../organisms/ProfileMessage'

// ------------- feed feed ------------
import Chat from '../organisms/Chat'

function ChatPage() {
    return (
        <div>
            <Row>
                <Col lg={4} className="profile" fixed="top">
                    <br />
                    <ProfileMessage />
                </Col>

                <Col lg={8} className="feed">
                    <Chat />
                </Col>
            </Row>
        </div >
    )
}

export default ChatPage
