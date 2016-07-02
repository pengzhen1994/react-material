/*
 * @Author: pengzhen
 * @Date:   2016-06-30 23:31:47
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-02 20:24:10
 */

'use strict';
import './index.less';
import React from 'react';
import {
    connect
} from 'react-redux';
import history from 'store/history';
import Paper from 'material-ui/Paper';
import Menus from 'components/Components/Menus';
import AutoComplete from 'material-ui/AutoComplete';


function mapStateToProps(state) {
    return {

    };
}

export class MenusBox extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            menus: [{
                label: '主页',
                value: '/'
            }, {
                label: '博客',
                value: '/blog'
            }, {
                label: 'Components',
                children: [{
                    label: 'Menus',
                    value: '/components/menus'
                },{
                    label: 'Wave',
                    value: '/components/wave'
                },{
                    label: 'Collapse',
                    value: '/components/collapse'
                }]
            }],
            styles: {

            }
        }
    }
    handleChange = (menu, value) => {
        history.push(value)
    }
    render() {
        const styles = this.state.styles;
        return (
            <Paper className="menu-paper">
                <div className="menu-head">
                    <img className='logo' src="http://materializecss.com/res/materialize.svg" alt=""/>
                    {/*<Paper className="search-paper">
                        <AutoComplete 
                            id='search'
                            dataSource={["sd",'sdsd','sdsdsd']}
                            fullWidth={true}
                            underlineShow={false}
                        />
                    </Paper>*/}
                </div>
                <Menus
                    waveColor={'rgba(225,225,225,0.2)'}
                    value={this.props.pathname}
                    data={this.state.menus}
                    onChange={this.handleChange}
                />
            </Paper>

        );
    }
}

export default connect(
    mapStateToProps,
    // Implement map dispatch to props
)(MenusBox)
