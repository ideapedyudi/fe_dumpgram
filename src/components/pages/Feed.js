// ------------- Aos --------------
import { Row, Col, Navbar, Card } from 'react-bootstrap';

import '../style/Feed.css'

// ------------- Aos --------------
// import Aos from "aos";
import "aos/dist/aos.css"

// ------------- asset ------------
import DumbGram from '../asset/DumbGram.svg';
import Profile from '../asset/Rectangle 4.jpg';

function Feed() {
    return (
        <div>
            <Row>
                <Col lg={4} className="profile" fixed="top">
                    <br />
                    <Navbar bg="dark" className="bar">
                        <img src={DumbGram} className="logo ms-4" alt="logo" />
                    </Navbar>
                    <Card className="bg-card text-center mt-4">
                        <Card.Body>
                            <Card.Text>
                                <div className="circle">
                                    <img src={Profile} className="logoprofile" alt="logo" />
                                </div>
                            </Card.Text>
                            <h3 className="namaprofile">Lisa</h3>
                            <p className="namagm">@alalisa_m</p>
                            <Row className="mt-4 barfollow">
                                <Col lg={4} className="panel">
                                    <p>Post</p>
                                    <p className="jumlah">200</p>
                                </Col>
                                <Col lg={4} className="panel">
                                    <p>Followers</p>
                                    <p className="jumlah">51.2 M</p>
                                </Col>
                                <Col lg={4} className="panels">
                                    <p>Following</p>
                                    <p className="jumlah">1</p>
                                </Col>
                            </Row>
                            <p className="bio">Rapper in Black Pink, Brand Ambasador Penshoppe</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={8} className="feed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur neque voluptatibus consequatur! Voluptatibus praesentium, nostrum iste, maiores recusandae placeat, sequi totam ipsa a mollitia ipsum! Ipsum itaque harum dignissimos excepturi deleniti quis iste aliquid dolorem ratione sunt sed culpa dolore autem possimus optio qui, adipisci temporibus quibusdam unde enim nostrum. Quam, sint commodi sequi nisi repellat quia facilis dolorem alias iure voluptas porro aut doloremque qui officia maxime animi vel natus debitis. Rerum et aliquam laborum distinctio voluptates alias repellendus dignissimos, doloribus eum modi dolorum perferendis cum dolor libero minus aut, vero praesentium sapiente voluptatum nobis blanditiis eveniet numquam. Magni cumque, blanditiis aliquam dicta, hic neque pariatur nisi maxime velit qui beatae. Vel ut voluptate totam ab quaerat culpa ratione fuga eum nulla, sint accusamus qui cupiditate sapiente possimus quidem quibusdam, nobis consectetur commodi. Eaque animi maxime, eum autem sed nostrum, molestiae vitae provident eos tempore, non doloribus ipsam. Quaerat quo voluptatum alias animi culpa laudantium maxime neque error corrupti qui quam ducimus nisi obcaecati dolores explicabo ea deleniti adipisci, cumque quisquam debitis et earum reiciendis illum? Hic in voluptates alias. Enim, nostrum. Pariatur, molestias dolorum veniam architecto ut iusto minima quia nobis culpa ducimus? Nisi velit qui reiciendis!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio dignissimos, veniam delectus quod, nam iste, error illum dicta perspiciatis soluta mollitia vero possimus magni voluptatibus labore consectetur aut expedita quam saepe eveniet eaque beatae aspernatur. Dicta laudantium expedita unde quae sint est, voluptatum eveniet voluptate nemo enim ratione. Fugit ipsa quod nobis perspiciatis, architecto consequuntur error obcaecati mollitia quos laboriosam quis repellat excepturi eius non numquam eos cum, pariatur, deleniti officiis deserunt distinctio reprehenderit. Reprehenderit autem cum odit soluta nobis recusandae veritatis eveniet, saepe aperiam voluptatem totam sed sapiente adipisci laborum velit expedita omnis magnam consequuntur? Aspernatur neque sed tenetur distinctio cumque enim accusamus ipsam? Neque a mollitia architecto expedita molestias qui quas minus reiciendis rerum aliquid exercitationem earum laboriosam aperiam impedit magnam, debitis quasi! Quidem, deserunt ex voluptatum fuga dignissimos ab molestias repellat atque aperiam nesciunt doloremque quis illum nulla, eum reiciendis aliquid minima totam incidunt. Rem aut iste ullam fuga! Officia eaque blanditiis voluptatibus tempore libero? Harum excepturi reprehenderit consequuntur error qui ratione beatae suscipit voluptatum, a facilis perferendis atque? Dolorem blanditiis quaerat reprehenderit expedita autem explicabo maiores commodi tempora tenetur odit facilis et suscipit inventore accusamus velit, ex accusantium unde assumenda hic magnam exercitationem incidunt amet!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a et voluptates! Recusandae totam dolor quae, non officiis ut. Quis assumenda voluptate ut magnam voluptatibus doloribus unde sapiente sit dolorem. Omnis mollitia ipsa maxime, veritatis neque ab provident delectus fugit non tenetur voluptates at molestias. Deleniti error laborum minus quibusdam, dolore, ad aspernatur omnis sed architecto nemo dolor dignissimos quod quam aliquid iusto ab, quos distinctio. Asperiores facere magni alias autem laboriosam illo nesciunt rerum velit veniam beatae consequatur officiis soluta, sit in exercitationem reiciendis facilis harum corrupti quos explicabo provident! Labore itaque magnam error. Possimus, a ab? Magnam dolorem sapiente quaerat voluptates reiciendis neque, quia unde ut accusamus facilis maiores? Officiis, accusamus consequuntur. Eligendi dolore labore quos rem nemo placeat nesciunt laboriosam? Earum sapiente ratione nam quae numquam modi ab et. Itaque voluptatem repellat reprehenderit suscipit! Et, atque? Asperiores quae, assumenda distinctio magnam sunt consectetur similique explicabo iusto ratione cum fugiat delectus quidem numquam inventore? Laudantium dolores quas omnis earum consequuntur asperiores eum fuga, perferendis tenetur aliquid alias quam error soluta? Pariatur ab repudiandae dolore maxime totam aperiam, corrupti odio nam mollitia officia nihil laborum ducimus, expedita aliquam ipsam minus laboriosam id atque est ullam? Dolorem molestiae blanditiis nam.
                </Col>
            </Row>
        </div >
    )
}

export default Feed
