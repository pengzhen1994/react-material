/*
 * @Author: pengzhen
 * @Date:   2016-07-01 15:54:53
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-02 21:48:35
 */

'use strict';
import React from 'react';
import Example,{ExampleCode} from 'components/MainLayout/Example';
import Menus,{ MenuItem } from './index.jsx';


let Data = [{
    label: '一级菜单1',
    value: '1'
}, {
    label: '一级菜单2',
    value: '2'
}, {
    label: '一级菜单3[无value]',
    children: [{
        label: '二级菜单1[有value]',
        value: '31',
        children: [{
            label: '三级菜单1',
            value: '311'
        }]
    },{
        label: '二级菜单2',
        value: '32'
    }]
}]


export default class example extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }
   
    render() {
        var style = {     
            width: 200,
            boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
        };
        return (
            <Example title={'Menus'}>
                <ExampleCode
                    title='Simple Menus'
                    code={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, vero.'}
                >
                    <div style={style}>
                        <Menus>
                            <MenuItem label='Options 1' />
                            <MenuItem label='Options 2' />
                            <MenuItem label='Options 3' />
                            <MenuItem label='Options 4' />
                        </Menus>
                    </div>
                </ExampleCode>

                <ExampleCode
                    title='Nested Menus'
                    code={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, vero.'}
                >
                    <div style={style}>
                        <Menus>
                            <MenuItem label='Options 1' />
                            <MenuItem label='Options 2' />
                            <MenuItem label='Options 3' />
                            <MenuItem 
                                label='Options 4' 
                                nestedItems={[
                                    <MenuItem key={1} label='Nested 1' />,
                                    <MenuItem key={2} label='Nested 2' />,
                                    <MenuItem key={3} label='Nested 3' />
                                ]}
                            />
                        </Menus>
                    </div>
                </ExampleCode>
            </Example>

        );
    }
}

