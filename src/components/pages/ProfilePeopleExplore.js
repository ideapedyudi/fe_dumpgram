// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- profile people ------------
import ProfilePeopleProfileExplore from "../organisms/ProfilePeopleProfileExplore";

// ------------- profile feed ------------
import ProfilPeopleExplore from "../organisms/ProfilPeopleExplore";


function ProfilePeopleExplore() {
    return (
        <div>
            <Row>
                {/* -------------------------- ProfilePeopleProfileExplore -----------------------  */}
                <Col lg={4} className="profile" fixed="top">
                    <ProfilePeopleProfileExplore />
                </Col>

                {/* -------------------------- ProfilPeopleExplore -----------------------  */}
                <Col lg={8} className="feed">
                    <ProfilPeopleExplore />
                </Col>
            </Row>
        </div >
    )
}

export default ProfilePeopleExplore

