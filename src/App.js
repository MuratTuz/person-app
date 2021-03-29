
import './App.css';
import * as fs from 'fs';
import { Container } from 'react-bootstrap';
import Person from './components/personal/person';
import Friend from './components/friends/friend';
import Child from './components/children/child';


function App() {

  const file = fs.readFileSync(process.env.PUBLIC_URL + '/foreigners.json');

  const fileData = JSON.parse(file);
  fileData.map((element, index) => {
    return (
      <Container kex={index}>
        <Person data={element} />
        <Child data={element.children} />
        <Friend data={element.friends} />
      </Container>
    )
  })

}

export default App;
