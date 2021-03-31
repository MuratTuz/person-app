
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Spinner } from "react-bootstrap";

import { Container } from 'react-bootstrap';
import Person from './components/personal/person';
import Friend from './components/friends/friend';
import Child from './components/children/child';

import readFile from './services/readFile';
import fileURL from './foreigners.json';


function App() {
  console.log(fileURL.length);
  const [fileJSON, setfileJSON] = useState('');
  readFile(fileURL).then(data => setfileJSON(data));
  console.log('fileJSon ' + fileJSON);
  console.log(fileURL);

  fileURL ?
    fileURL.map((element, index) => {
      return (
        <Container kex={index}>
          <Person data={element} />
          <Child data={element.children} />
          <Friend data={element.friends} />
        </Container>
      )
    })
    :
    Array.from([1]).map(e => {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    })

}

export default App;
