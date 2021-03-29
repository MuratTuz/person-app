
import { Row, Col } from 'react-bootstrap';
import FriendItem from './friendItem';

const Friend = (props) => {

    return (
        <Row>
            <Col>
                <h3>Friends</h3>
            </Col>
            {props.data.map((element, index) =>
                <FriendItem data={element} key={index} />
            )}
        </Row>
    )

}

export default Friend;