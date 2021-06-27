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
import productsData from './vschoolProducts';
import Product from './Product';
import jokesData from './jokesData';
import todosData from './todosData';
import TodoItem from './TodoItem';
function App() {
  /* return (
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
  const productComponents = productsData.map(item => <Product key={item.id} product ={item} />)
  return (
    <div>
      {productComponents}
    </div>
  )
    const jokeComponents = jokesData.map(joke=> <Joke key ={joke.id} question={joke.question}
      punchLine = {joke.punchLine} />)
      return (
        <div>
          {jokeComponents}
        </div>
      )*/
      const todoItems = todosData.map(item=> <TodoItem key={item.id} item={item.text} />)
      console.log(todoItems)
      return (
        <div className="todo-list">
          {todoItems}
        </div>
      )
}

export default App;
