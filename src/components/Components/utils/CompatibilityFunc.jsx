/*
* @Author: pengzhen
* @Date:   2016-07-04 14:59:18
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-04 15:13:31
*/

'use strict';

function regist(name,func){
    window[name] = window[name] || func;
}
