
import { Container, Row, Col } from 'react-bootstrap';

const Person = (props) => {

    const friendNumber = props.data.friends.lenght;
    const childNumber = props.data.children.lenght;
    const avatar = props.data.avatar;
    const firstName = props.data.first_name;
    const lastName = props.data.last_name;
    const email = props.data.email;
    const gender = props.data.gender;
    const salary = props.data.salary;
    const address = props.data.address;

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <img src={avatar} alt='it cannot be shown' />
                    <p>Children : {childNumber}</p>
                    <p>Friends : {friendNumber}</p>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col>
                            <h3>Personal</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Lastname : {lastName}</p>
                            <p>Firstname : {firstName}</p>
                        </Col>
                        <Col>
                            <p>Address : {address}</p>
                            <p>Salary : {salary}</p>
                        </Col>
                        <Col>
                            <p>Gender : {gender}</p>
                            <p>Email : {email}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default Person;