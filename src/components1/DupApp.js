import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import ListApi from './components1/ListApi';
import PostForms from './components1/PostForms';
import ClassCounter from './components1/ClassCounter';
import HookCounterTwo from './components1/HookCounterTwo';
import Title from './components1/Title';
import HookCounterOne from './components1/HookCounterOne';
class App extends Component{
  render() {
  return (
     <div className="App">
<Title/>
<HookCounterOne/>
      </div>


);
}
}

export default App;
