import {login, logout} from '../../actions/auth';

test('should genereate Login action object', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should genereate Logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
}); 