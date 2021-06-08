// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- profile feed ------------
import ProfileMessage from '../organisms/ProfileMessage';

// ------------- feed feed ------------
import Nomessage from '../organisms/Nomessage';

function MessagePage() {
    return (
        <div>
            <Row>
                {/* -------------------------- ProfileMessage -----------------------  */}
                <Col lg={4} className="profile" fixed="top">
                    <br />
                    <ProfileMessage />
                </Col>

                {/* -------------------------- Nomessage -----------------------  */}
                <Col lg={8} className="feed">
                    <Nomessage />
                </Col>
            </Row>
        </div >
    )
}

export default MessagePage
