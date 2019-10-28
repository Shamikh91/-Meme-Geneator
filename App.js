import React from 'react';
import ReactDOM from 'react-dom';
import randomcolor from "random-color"
import logo from './logo.svg';
import './App.css';
import  Header from './components/Header' 
import  MemeGenerator from './components/MemeGenerator'



class App extends React.Component{

      render(){
        return(
                <div>
                  <Header/>
                  < MemeGenerator/>

                </div>
      )
    } 
  }

  export default App