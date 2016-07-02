/*
 * @Author: pengzhen
 * @Date:   2016-07-02 15:57:29
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-02 22:16:19
 */

'use strict';
import React from 'react';
import Example,{ExampleCode} from 'components/MainLayout/Example';
import Collapse from './index.jsx';

export default class example extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            open: {
                1: true,
                2: true
            }
        }
    }
    onClick=(index)=>{
        let newOpen = {...this.state.open};
        newOpen[index] = !newOpen[index];
        this.setState({
            open: newOpen
        })
    }
    render() {
        var open = this.state.open;
        return (
            <Example title='Collapse'>
                <p>Collapse下的第一层元素不能有padding,不然会卡顿,因为padding不收overflow:hidden;控制</p>
                <ExampleCode 
                    title='上下展开'
                    code={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, vero.'}
                >
                    <div>
                        <button onClick={this.onClick.bind(this,1)}>button</button>
                        <Collapse 
                            open={open[1]}>
                            <div style={{ width:'100%',height: 100,background: '#ddd' }}></div>
                        </Collapse>
                    </div>
                </ExampleCode>

                <ExampleCode 
                    title='左右展开'
                    code={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, vero.'}
                >
                    <div>
                        <button onClick={this.onClick.bind(this,2)}>button</button>
                        <Collapse open={open[2]} type='width'>
                            <div style={{ width:100,height: 100,background: '#ddd' }}></div>
                        </Collapse>
                    </div>
                </ExampleCode>
            </Example>
        );
    }
}
