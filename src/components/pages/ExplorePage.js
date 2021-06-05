// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- profile explore ------------
import ProfileExplore from '../organisms/ProfileExplore';
import ExploreExplore from '../organisms/ExploreExplore';

function ExplorePage() {
    return (
        <div>
            <div>
                <Row>
                    <Col lg={4} className="profile" fixed="top">
                        <br />
                        <ProfileExplore />
                    </Col>

                    <Col lg={8} className="feed">
                        <ExploreExplore />
                    </Col>
                </Row>
            </div >
        </div >
    )
}

export default ExplorePage
