import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../App';
import People from  './People';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/people/:id" component={People} />
        </Switch>
    </BrowserRouter>
);

export default Router;