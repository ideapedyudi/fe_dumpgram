// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- Profile Post Edit ------------
import ProfilePostEdit from '../organisms/ProfilePostEdit';

// ------------- feed feed ------------
import EditProfile from '../organisms/EditProfile';

function EditProfilePage() {
    return (
        <div>
            <Row>
                {/* -------------------------- ProfilePostEdit -----------------------  */}
                <Col lg={4} className="profile" fixed="top">
                    <br />
                    <ProfilePostEdit />
                </Col>

                {/* -------------------------- EditProfile -----------------------  */}
                <Col lg={8} className="feed">
                    <EditProfile />
                </Col>
            </Row>
        </div >
    )
}

export default EditProfilePage
