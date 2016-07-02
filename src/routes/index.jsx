import React, {
    PropTypes
} from 'react';
import {
    Router,
    Route,
    IndexRoute
} from 'react-router';
import App from 'components/App';
// import NotFound from '../components/NotFound';
import TodoList from 'components/Todos/TodoList';
import Blog from 'components/Blog';
import MenusExample from 'components/Components/Menus/example';
import WaveExample from 'components/Components/Wave/example';
import CollapseExample from 'components/Components/Collapse/example';
export default class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/todo' component={TodoList} />
                <Route path='/' component={App}>
                    <Route path='blog' component={Blog} />
                    <Route path='components'>
                        <Route path='menus' component={MenusExample} />
                        <Route path='wave' component={WaveExample} />
                        <Route path='collapse' component={CollapseExample} />
                    </Route>
                </Route>
            </Router>
        );
    }
}
