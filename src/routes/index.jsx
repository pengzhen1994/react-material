import React from 'react';
import {
    Router,
    Route,
    IndexRoute
} from 'react-router';
import App from 'components/App';
import Test from 'components/Test';
// import NotFound from '../components/NotFound';
import TodoList from 'components/Todos/TodoList';
import Blog from 'components/Blog';

import exampleRoutes from './example';

export default class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/test' component={Test} />
                <Route path='/todo' component={TodoList} />
                <Route path='/' component={App}>
                    <Route path='blog' component={Blog} />
                    {exampleRoutes}
                </Route>
            </Router>
        );
    }
}
