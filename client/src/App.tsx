import React from 'react';
import {BrowserRouter as Router, Route, RouteComponentProps} from 'react-router-dom';

import { AppProvider } from './provider';
import { ListContainer } from './components/list/container';
import { DetailsContainer } from './components/details/container';

type MatchParams = {
    login: string
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const App = () => (
    <Router>
        <AppProvider>
            <Route path={'/user/:login'} render={({ match, history }:MatchProps ) => (
                <DetailsContainer login={match.params.login} history={history}/>)}/>
            <Route path={'/users'} render={({history}:RouteComponentProps) => (
                <ListContainer history={history} />)} />
            <Route exact path={'/'} render={({history }:RouteComponentProps) => (
                <ListContainer history={history} />)}/>
        </AppProvider>
    </Router>
);

export default App;
