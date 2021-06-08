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
                {/* -------------------------- ProfilePeopleProfilFeed -----------------------  */}
                <Col lg={4} className="profile" fixed="top">
                    <ProfilePeopleProfilFeed />
                </Col>

                {/* -------------------------- ProfilPeopleFeed -----------------------  */}
                <Col lg={8} className="feed">
                    <ProfilPeopleFeed />
                </Col>
            </Row>
        </div >
    )
}

export default ProfilePeopleFeed

