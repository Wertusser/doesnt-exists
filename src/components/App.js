import React, {Component} from 'react';
import MainPage from './mainPage';
import '../App.css';
import 'bootstrap';
import {GAN_LABELS} from '../static/labels';

class App extends Component {
    render() {
        return (
            <MainPage options={GAN_LABELS}/>
        );
    }
}

export default App;
