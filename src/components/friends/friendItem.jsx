
import { Col } from 'react-bootstrap';

const FriendItem = (props) => {

    const avatar = props.data.avatar;
    const firstName = props.data.firstName;
    const lastName = props.data.lastName;
    const gender = props.data.gender;
    const salary = props.data.salary;
    const address = props.data.address;
    const city = props.data.city;
    const birthday = props.data.birthday;
    const language = props.data.language;
    const profession = props.data.profession;
    const phone = props.data.phone;

    return (
        <Col>
            <img src={avatar} alt='it cannot be shown' />
            <p>Firstname : {firstName}</p>
            <p>Lastname : {lastName}</p>
            <p>Gender : {gender}</p>
            <p>Profession : {profession}</p>
            <p>Language : {language}</p>
            <p>Birthday : {birthday}</p>
            <p>Salary : {salary}</p>
            <p>Address : {address}</p>
            <p>City : {city}</p>
            <p>Phone : {phone}</p>
        </Col>

    )

}

export default FriendItem;