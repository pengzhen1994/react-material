/*
* @Author: pengzhen
* @Date:   2016-07-01 01:28:12
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-01 01:29:41
*/

'use strict';
import './index.less';
import React from 'react';

export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='main-layout'>
                <div className='layout-manus'>{this.props.menus}</div>
                <div className='layout-container'>{this.props.children}</div>                
            </div>
        );
    }
}
