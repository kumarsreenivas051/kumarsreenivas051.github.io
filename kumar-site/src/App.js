import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ContactCard from './ContactCard';
import Joke from './Joke';
import Nav from "react-bootstrap/Nav";
import {Button,Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Card border="primary" style={{ width: '50rem' }}>
    <Card.Body>
      <Card.Text>
      <Joke 
        question="Why people always keep smiling?" 
        punchLine="Because they can’t keep a straight face."
      />
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="primary" style={{ width: '50rem' }}>
    <Card.Body>
      <Card.Text>
      <Joke question="Why did David Hasselhoff change his name to “The Hoff?”" punchLine="It’s less hassle."/>
      <Joke question="Why does Waldo wear stripes?" punchLine="Because he doesn’t want to be spotted."/>
      </Card.Text>
    </Card.Body>
  </Card>
      
      

    </div>
  );
}

export default App;
