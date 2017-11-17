import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Search from '../search/App.js';
import './App.css';

const navbar_style = {
    textDecoration : 'none',
    color : 'white', 
};

class App extends Component{
    
    render(){
        return(
            <header className="App-header">
                <ul className='nav-span'>
                    
                    <li className='nav-span'><Link to='/' style={ navbar_style }>Home</Link></li>
                    <li className='nav-span'><Link to='/cat' style={ navbar_style }>Categories</Link></li>
                    <li className='nav-span'>Login</li>
                    <li className='nav-span'><Link to='/add' style={ navbar_style }>Add</Link></li>
                    <Search className='nav-span' />
                </ul>
            </header>
        );
    }
}


export default App;