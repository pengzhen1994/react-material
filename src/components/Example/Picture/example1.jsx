/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 18:39:24
 */

'use strict';
import React from 'react';
import Picture from 'react-material/Picture';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{paddingTop: 500}}>
                <Picture src='http://materializecss.com/images/sample-1.jpg' />
                <Picture src='http://materializecss.com/images/sample-1.jpg2' />
            </div>
        );
    }
}

export const title = "Simple Picture";
export const code = 'import React from \'react\';';
