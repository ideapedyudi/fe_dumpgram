// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- profile people ------------
import ProfilePeopleProfilFeed from "../organisms/ProfilePeopleProfilFeed";

// ------------- profile feed ------------
import ProfilPeopleFeed from "../organisms/ProfilPeopleFeed";


function ProfilePeopleFeed() {
    return (
        <div>
            <Row>
                <Col lg={4} className="profile" fixed="top">
                    <ProfilePeopleProfilFeed />
                </Col>

                <Col lg={8} className="feed">
                    <ProfilPeopleFeed />
                </Col>
            </Row>
        </div >
    )
}

export default ProfilePeopleFeed

