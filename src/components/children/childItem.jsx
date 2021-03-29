
import { Col } from 'react-bootstrap';

const ChildItem = (props) => {

    const avatar = props.data.avatar;
    const firstName = props.data.firstName;
    const lastName = props.data.lastName;
    const gender = props.data.gender;
    const birthday = props.data.birthday;

    return (
        <Col>
            <img src={avatar} alt='it cannot be shown' />
            <p>Firstname : {firstName}</p>
            <p>Lastname : {lastName}</p>
            <p>Gender : {gender}</p>
            <p>Birthday : {birthday}</p>
        </Col>

    )

}

export default ChildItem;