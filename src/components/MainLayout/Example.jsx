/*
 * @Author: pengzhen
 * @Date:   2016-07-01 17:51:18
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-02 22:01:55
 */

'use strict';
import './example.less';
import React from 'react';
import wave from 'components/Components/Wave'
import Collapse from 'components/Components/Collapse'

const colors = ['#ff6768']

export default class Example extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            waveColor: this.randomColor()
        }
    }
    changeColor = () => {
        this.setState({
            waveColor: this.randomColor()
        });
    }
    randomColor() {
        return "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
    }
    render() {
        return (
            <div className="components-example">
                <TopNav 
                    title={this.props.title} 
                    waveAnim={'exampleAnim'}
                    waveColor={this.state.waveColor} 
                    onClick={this.changeColor}
                />
                <div className="main container">
                    <div className="left-col">
                        {this.props.children}
                    </div>
                    <div className="right-col">

                    </div>
                </div>
            </div>
        );
    }
}
@wave()
export class TopNav extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="top-nav" onClick={this.props.onClick}>
                <div className="container">
                    <h1 className="title">{this.props.title}</h1>
                </div>
            </div>
        );
    }
}


export class ExampleCode extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div className='example-coder'>
                {/*<h2 className='example-title'>{this.props.title}</h2>
                {this.props.desc && <p className="example-desc">{this.props.desc}</p>}*/}
                <div className='code-box'>
                    <div 
                        className='code-header' 
                        onClick={()=>{ this.setState({
                            open: !this.state.open
                        }); 
                    }} >
                        {this.props.title} <span className='right-btn'><i className="fa fa-code"></i></span>
                    </div>
                    <Collapse className='code-text' open={this.state.open}>
                        <code>
                            {this.props.code}
                        </code>
                    </Collapse>
                    <div className="code-example">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
