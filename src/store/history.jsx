/*
* @Author: pengzhen
* @Date:   2016-06-29 21:16:30
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-06-29 21:27:28
*/

'use strict';
import {
    browserHistory,
    hashHistory
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './index';

export default syncHistoryWithStore(browserHistory, store);
