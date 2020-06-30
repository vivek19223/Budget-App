import authReducer from '../../reducers/auth'

test('Should set uid for login',()=>{
    const action = {
        type : 'LOGIN', 
        uid : 'abc'
    }
    const state = authReducer({}, action)
    expect(state.uid).toEqual(action.uid)

})

test('Should unset uid for logout',()=>{
    const action = {
        type : 'LOGOUT'
    }
    const state = authReducer({uid: 'anything'}, action)
    expect(state.uid).toEqual({})

})