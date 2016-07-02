/*
* @Author: pengzhen
* @Date:   2016-07-02 17:24:49
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-02 17:25:20
*/

'use strict';
export function css(obj, attr, value) {
    if (value) {
        attr == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")", obj.style[attr] = value / 100) : obj.style[attr] = value;
    } else {
        if (typeof arguments[1] == "object") {
            for (var i in attr) i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + attr[i] + ")", obj.style[i] = attr[i] / 100) : obj.style[i] = attr[i];
        } else {
            return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
        }
    }
};
