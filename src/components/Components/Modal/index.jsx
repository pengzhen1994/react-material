/*
 * @Author: pengzhen
 * @Date:   2016-07-05 13:44:39
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 18:12:43
 */

'use strict';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Transition from '../Transition';
import bindArray from '../utils/bindArray';
import * as DomUtils from '../utils/dom';

let mask = null;

const hideStyle = {
    transform: 'scale(0)',
    opacity: 0
}
const openStyle = {
    transform: 'scale(1)',
    opacity: 1
}


export default class Modal extends React.Component {
    static propTypes = {
        open: React.PropTypes.bool,
        duration: React.PropTypes.number,
    };

    static defaultProps = {
        open: false,
        duration: 200,
        width: 520,
        maskClosable: true
    };

    constructor(props) {
        super(props);
        bindArray(this, ['handleEnter', 'handleEntering', 'handleEntered', 'handleExit', 'handleExiting', 'handleExited']);
        if (!mask) {
            mask = DomUtils.createElement("<div class='modal-mask'></div>");
            DomUtils.css(mask, 'display', props.open ? 'block' : 'none');
            document.body.appendChild(mask);
        }
    }

    handleEnter(elem) {
        DomUtils.css(document.body, 'overflow','hidden');
        mask && DomUtils.css(mask, {
            display: 'block',
            transitionDuration: this.props.duration
        });
        DomUtils.css(ReactDOM.findDOMNode(this.refs.wrap), 'display', 'block');
        DomUtils.css(elem, hideStyle);

        if (this.mousePosition) {
            let {x, y } = this.mousePosition;
            DomUtils.css(elem, 'transform-origin', `${x}px ${y}px 0`);
        } else {
            DomUtils.css(elem, 'transform-origin', null);
        }
    }

    handleEntering(elem) {
        setTimeout(() => {
            mask && DomUtils.css(mask, 'opacity', 0.3);
            DomUtils.css(elem, openStyle);
        }, 10)
    }

    handleEntered(elem) {

    }

    handleExit(elem) {
        DomUtils.css(elem, openStyle);
    }

    handleExiting(elem) {
        setTimeout(() => {
            mask && DomUtils.css(mask, 'opacity', 0);
            DomUtils.css(elem, hideStyle);
        }, 10)
    }
    handleExited(elem) {
        DomUtils.css(document.body, 'overflow',null);
        mask && DomUtils.css(mask, {
            display: 'none',
            transitionDuration: null
        })
        DomUtils.css(ReactDOM.findDOMNode(this.refs.wrap), 'display', 'none');
    }
    componentDidMount() {
        this.listener = DomUtils.addEventListener(document.documentElement, 'click', (e) => {
            this.mousePosition = {
                x: e.pageX,
                y: e.pageY
            };
            // 20ms 内发生过点击事件，则从点击位置动画展示
            // 否则直接 zoom 展示
            // 这样可以兼容非点击方式展开
            setTimeout(() => {
                return this.mousePosition = null;
            }, 20);
        });
    }
    componentWillUnmount() {
        this.listener && this.listener.remove();
    }
    renderHead(){

    }
    renderFooter(){

    }
    render() {
        let enter = this.handleEnter;
        let entering = this.handleEntering;
        let entered = this.handleEntered;
        let exit = this.handleExit;
        let exiting = this.handleExiting;
        let exited = this.handleExited;

        let modalStyle = {
            width: this.props.width
        }
        return (
            <div ref='wrap' className={classnames("modal-wrap")}>
                <Transition
                    ref="transition"
                    in={this.props.open}
                    className={classnames(this.props.className)}
                    exitedClassName="modal-content"
                    exitingClassName="modal-content transiting"
                    enteredClassName="modal-content open"
                    enteringClassName="modal-content transiting"
                    onEnter={enter}
                    onEntering={entering}
                    onEntered={entered}
                    onExit={exit}
                    onExiting={exiting}
                    onExited={exited}
                >
                    <div 
                        onClick={this.props.maskClosable && this.props.onClose }
                        style={{transitionDuration: this.props.duration+'ms'}}>
                        <div 
                            className='modal'
                            onClick={(e)=>{ e.stopPropagation();}}
                            style={modalStyle}
                        > 
                            {this.renderHead()}
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            {this.renderFooter()}
                        </div>
                    </div> 
                </Transition> 
            </div>

        );
    }
}
