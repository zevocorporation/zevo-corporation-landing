import React from 'react'
import './index.css'

//Importing notification package
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//importing screens
import { Home, About, Careers, Contactus, OurWork} from './screens/'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/our_work" exact component={OurWork} />
                <Route path="/careers" exact component={Careers} />
                <Route path="/contactus" exact component={Contactus} />
            </Switch>
            <ToastContainer />
        </Router>
    )
}

export default App
