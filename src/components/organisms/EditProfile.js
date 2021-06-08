// ------------- Bootstrap --------------
import { Navbar, InputGroup, FormControl, Button, Container, Form } from 'react-bootstrap';

// ----------- feed.css ----------------
import '../style/CreatePostEdit.css';
import '../style/EditProfile.css';
import Notifikasi from './Notifikasi';

// -------- router -------------
import { Link } from "react-router-dom";

// ------------- Aos -----------------
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// ------------- fontawesome -----------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function EditProfile() {
    // aos duration
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            {/* navbar feed */}
            <Navbar fixed="top" className="bartpostnotif">
                <Container>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="icon-serch-feed" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="cariFeeds" placeholder="Search" />
                    <p className="JudulFeed">Edit Profile</p>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Notifikasi />
                        <Link to="/MessagePage"><FontAwesomeIcon className="icon-Notifikasi" icon={faPaperPlane} /></Link>
                        <Navbar.Text>
                            <Link to="/CreatePostPage">
                                <Button className="button-post"><span className="plusquar"><FontAwesomeIcon className="icon-plus" icon={faPlus} /></span> &nbsp;<span className="create">Create Post</span></Button>
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* image feed */}
            <div className="masoryholders" data-aos="fade-up"> <br />
                <Button className="tbupload justify-content-center">Upload Photo</Button>
                <Form> <br />
                    <div>
                        <Form.Control className="EditProfile" type="text" placeholder="Name" /> <br />
                        <Form.Control className="EditProfile" type="text" placeholder="Username" /> <br />
                    </div>
                    <Form.Control
                        className="captionss"
                        as="textarea"
                        placeholder="Bio"
                        style={{ height: '170px' }}
                    />
                    <Button className="tbupload justify-content-center mt-4 ms-lg-auto uploadbtn">Save</Button>
                </Form>
            </div>
            <br />
            <br />
        </>
    )
}

export default EditProfile

