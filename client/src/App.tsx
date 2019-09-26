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
            <Route path={'/user/:login'} render={( { match }:MatchProps ) => (
                <DetailsContainer login={match.params.login} />)}/>
            <Route path={'/users'} component={ListContainer}/>
            <Route exact path={'/'} component={ListContainer}/>
        </AppProvider>
    </Router>
);

export default App;
