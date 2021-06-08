// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- profile feed ------------
import ProfileFeed from '../organisms/ProfileFeed';

// ------------- feed feed ------------
import FeedFeed from '../organisms/FeedFeed';

function Feed() {
    return (
        <div>
            <Row>
                {/* -------------------------- ProfileFeed -----------------------  */}
                <Col lg={4} className="profile" fixed="top">
                    <br />
                    <ProfileFeed />
                </Col>

                {/* -------------------------- FeedFeed -----------------------  */}
                <Col lg={8} className="feed">
                    <FeedFeed />
                </Col>
            </Row>
        </div >
    )
}

export default Feed
