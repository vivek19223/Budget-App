import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('Should test login page correctly',()=>{
    const wrapper = shallow(<LoginPage startLogin={ ()=> { }}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLogin on button click',()=>{
    const onClickSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={ onClickSpy}/>)
    wrapper.find('button').simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
})