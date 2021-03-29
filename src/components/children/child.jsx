
import { Row, Col } from 'react-bootstrap';
import ChildItem from './childItem';

const Child = (props) => {

    return (
        <Row>
            <Col>
                <h3>Children</h3>
            </Col>
            {props.data.map((element, index) =>
                <ChildItem data={element} key={index} />
            )}
        </Row>
    )

}

export default Child;