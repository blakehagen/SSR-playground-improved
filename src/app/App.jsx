import React, {Component} from 'react';
import Helmet from "react-helmet";
import {Switch, Route, NavLink} from 'react-router-dom';

import Home from './components/Home';
import Menu from './components/Menu';

import styles from '../styles/styles.scss';

class About extends Component {
    render () {
        return (
            <div>
                <Helmet title="About us"/>
                <Menu/>
                <h1>About</h1>
            </div>
        );
    }
}

class Contact extends Component {
    render () {
        return (
            <div>
                <Helmet title="Contact us"/>
                <Menu/>
                <h1>Contact</h1>
            </div>
        );
    }
}


export default class App extends Component {

    render () {
        return (
            <div>
                <Helmet
                    htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
                    titleTemplate="%s | React App"
                    titleAttributes={{itemprop: "name", lang: "en"}}
                    meta={[
                        {name: "description", content: "Server side rendering example"},
                        {name: "viewport", content: "width=device-width, initial-scale=1"},
                    ]}
                    link={[{rel: "stylesheet", href: "/dist/styles.css"}]}
                />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        );
    }
}
