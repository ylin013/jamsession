
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import Signup from '../../containers/Signup';

import React from 'react';
import { shallow } from 'enzyme';

describe('Test case for initial states',() =>{
let wrapper;

it('check new user value ',()=>{
wrapper = shallow(<Signup/>);
expect(wrapper.state('newUser')).toBe(null);
})

it('initial username value',()=>{
    wrapper = shallow(<Signup/>);
    
    expect(wrapper.state('username')).toBe('');
    })

it('initial password value',()=>{
        wrapper = shallow(<Signup/>);
        
        expect(wrapper.state('password')).toBe('');
    })
    
    
})

