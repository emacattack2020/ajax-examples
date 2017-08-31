import posts from './reducer';

describe('Post Reducer', () => {
    it('handle default state', () => {
        expect(posts(undefined, { type: 'unexpected'})).toEqual({
        })
    })
    it('handle REQUEST_POSTS', () => {
        expect(posts(undefined, { type: 'REQUEST_POSTS', payload: 'json object'})).toEqual({
            isFetching: true,
            payload: 'json object'
        })
    })
    it('handle RECIEVE_POSTS', () => {
        expect(posts(undefined, { type: 'RECEIVE_POSTS', payload: 'json object'})).toEqual({
            isFetching: false,
            payload: 'json object'
        })
    })
    it('handle RECEIVE_POSTS_REJECTED', () => {
        expect(posts(undefined, { type: 'RECEIVE_POSTS_REJECTED', payload: 'json object'})).toEqual({
            isFetching: false,
            payload: 'json object'
        })
    })
})