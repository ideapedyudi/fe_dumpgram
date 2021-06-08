// ------------- Bootstrap --------------
import { Row, Col } from 'react-bootstrap';

// ------------- Profile Post Edit ------------
import ProfilePostEdit from '../organisms/ProfilePostEdit';

// ------------- feed feed ------------
import CreatePost from '../organisms/CreatePost';

function CreatePostPage() {
    return (
        <div>
            <Row>
                {/* -------------------------- ProfilePostEdit -----------------------  */}
                <Col lg={4} className="profile" fixed="top">
                    <br />
                    <ProfilePostEdit />
                </Col>

                {/* -------------------------- CreatePost -----------------------  */}
                <Col lg={8} className="feed">
                    <CreatePost />
                </Col>
            </Row>
        </div >
    )
}

export default CreatePostPage
