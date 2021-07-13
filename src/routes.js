import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Container from './components/layout/container'
import './reset.css'

function RoutesList() {
    return (
        <Container>
            <Switch>
                <Route exact path="/insert">
                    <div>adicionar</div>
                </Route>

                <Route exact path="/read">
                    <div>ler</div>
                </Route>

                <Route exact path="*">
                    <Redirect to="/insert" />
                </Route>
            </Switch>
        </Container>
    )
}

export default RoutesList