import users from './reducers';

describe('User Info Reducer', () => {
    it('handle a default state', () => {
        expect(users(undefined, { type: 'unexpected'})).toEqual({
        })
    })
    it('handle REQUEST_USERS', () => {
        expect(users(undefined, { type: 'REQUEST_USERS', payload: 'jsonObject'})).toEqual({
            isFetching: true,
            payload: 'jsonObject'
        })
    })
    it('handle RECEIVE_USER_INFO', () => {
        expect(users(undefined, { type: 'RECIEVE_USERS', payload: 'jsonObject'})).toEqual({
            isFetching: false,
            payload: 'jsonObject'
        })
    })
    it('handle RECIEVE_USERS_REJECTED', () => {
        expect(users(undefined, { type: 'RECIEVE_USERS_REJECTED', payload: 'err'})).toEqual({
            isFetching: false,
            payload: 'err'
        })
    })
})