import React, {Component} from 'react'
import {Switch, Route} from 'react-router'

import {
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
} from "@react-firebase/auth";
import LoginPage from "./LoginPage"

import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
    }

    redirect = () => {
        window.location.href = 'http://localhost:9000';
        // maybe can add spinner while loading
        return null;
    }

    render() {
        return (
            <div className="App">
                <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
                    <FirebaseAuthConsumer>
                        <IfFirebaseAuthed>
                            <Switch>
                                <Route render={() =>  this.redirect() }/>
                            </Switch>
                        </IfFirebaseAuthed>
                        <IfFirebaseUnAuthed>
                            <LoginPage />
                        </IfFirebaseUnAuthed>
                    </FirebaseAuthConsumer>
                </div>
            </div>

        );
    }
}

export default App;
