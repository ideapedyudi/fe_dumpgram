// ------------- Bootstrap --------------
import { Card } from 'react-bootstrap';


import { Popover } from 'antd';
import 'antd/dist/antd.css';

// ------------- fontawesome -----------
import '../style/Notifikasi.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

// ------------- asset -------------
import Profile from '../asset/Rectangle 4.jpg';


function Notifikasi() {
    const content = (
        <div className="cont">
            <Card style={{ width: '12rem' }} className="cardnotif">
                <div className="starttif">
                    <div className="ovalnotif">
                        <Card.Img className="profilnotif" variant="top" src={Profile} />
                    </div>
                    <Card.Body className="titlenotif">
                        <Card.Text className="namenotif">
                            abdul_ha
                    </Card.Text>
                        <Card.Text>
                            Komentar : <span className="komentnotif">Nice Place</span>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>

            <Card style={{ width: '12rem' }} className="cardnotif">
                <div className="starttif">
                    <div className="ovalnotif">
                        <Card.Img className="profilnotif" variant="top" src={Profile} />
                    </div>
                    <Card.Body className="titlenotif">
                        <Card.Text className="namenotif">
                            egi-lol
                    </Card.Text>
                        <Card.Text>
                            Komentar : <span className="komentnotif">Good Vibe</span>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
    return (
        <div>
            <Popover placement="bottomRight" content={content} trigger="click">
                <FontAwesomeIcon className="icon-Notifikasi ms-3" icon={faBell} />
            </Popover>
        </div>
    )
}

export default Notifikasi
