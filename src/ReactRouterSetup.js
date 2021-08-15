import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

// PAGES
import Home from "./pages/Home"
import EventPage from "./pages/EventPage"
import App from "./pages/App"
import Team from "./pages/Team"
import Calendar from "./pages/Calendar"
import ErrorPage from "./pages/ErrorPage"

// COMPONENTS
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


const ReactRouterSetup = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/events'>
                    <EventPage/>
                </Route>
                <Route path='/app'>
                    <App/>
                </Route>
                <Route path='/team'>
                    <Team/>
                </Route>
                <Route exact path='/calendar'>
                    <Calendar/>
                </Route>
                <Route path='*'>
                    <ErrorPage/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default ReactRouterSetup