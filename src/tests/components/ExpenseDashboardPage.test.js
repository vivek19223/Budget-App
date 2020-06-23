import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('Should test Dashboard page correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage/>)
    expect(wrapper).toMatchSnapshot()
})