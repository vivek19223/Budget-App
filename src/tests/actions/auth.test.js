import { login,logout } from '../../actions/auth'

test('Should test login correctly',()=>{
    const uid = 'abc123'
    const action = login( uid )
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('Should test logout correctly',()=>{
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})