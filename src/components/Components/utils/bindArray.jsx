/*
* @Author: pengzhen
* @Date:   2016-07-02 18:16:36
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-02 18:17:48
*/

'use strict';
export default function(arr){
    if(arr instanceof Array){
        arr.forEach(method => {
            this[method] = typeof this[method] === 'function' ? this[method].bind(this) : undefined
        })   
    }
}
