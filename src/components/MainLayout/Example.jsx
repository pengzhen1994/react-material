/*
 * @Author: pengzhen
 * @Date:   2016-07-01 17:51:18
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-03 21:15:49
 */

'use strict';
import './example.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-material/Codemirror';
import wave from 'react-material/Wave';
import Collapse from 'react-material/Collapse';
import DocumentUtils from 'utils/DocumentUtils';


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
    scrollToRef(ref) {
        let dom = this.refs[ref];
        if (dom) {
            if (dom._reactInternalInstance) {
                dom = ReactDOM.findDOMNode(dom);
            }
            DocumentUtils.scrollTo(DocumentUtils.getOffset(dom).y)
        }
    }
    renderLink(ref,title){

        return <li key={ref} className='index'><a  onClick={this.scrollToRef.bind(this,ref)}>{title}</a></li>;
    }
    render() {
        let links = [];
        let content = this.props.content;
        if(content){
            content = content.map((obj,i)=>{
                const { title,code } = obj;
                const Component = obj.default;
                const ref = 'example_' + i;
                links.push(this.renderLink(ref,title))
                return (
                    <ExampleCode
                        key={i}
                        ref={ref}
                        title={title}
                        code={code}
                    >
                        <Component/>
                    </ExampleCode>
                )
            })
        }
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
                        {content}
                    </div>
                    <div className="right-col">
                        <ul className='scroll-index'>
                            {links}
                        </ul>
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
            open: true
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
                    {
                        this.props.code &&
                        <Collapse className='code-text' unmountOnExit={true} open={this.state.open}>
                            <div style={{maxHeight: 300,overflow: 'auto'}}>
                                <Codemirror value={this.props.code} />
                            </div>
                        </Collapse>
                    }
                    <div className="code-example">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

