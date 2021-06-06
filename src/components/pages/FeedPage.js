// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- profile feed ------------
import ProfileFeed from '../organisms/ProfileFeed'

// ------------- feed feed ------------
import FeedFeed from '../organisms/FeedFeed'

function Feed() {
    return (
        <div>
            <Row>
                <Col lg={4} className="profile" fixed="top">
                    <br />
                    <ProfileFeed />
                </Col>

                <Col lg={8} className="feed">
                    <FeedFeed />
                </Col>
            </Row>
        </div >
    )
}

export default Feed
