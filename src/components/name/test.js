import name from "./reducer";

describe('Name Reducer', () => {
    it('handle a  default state', () => {
        expect(name(undefined, { type: 'unexpected'})).toEqual({
            name: 'Max'
        })
    })
    it('handle setting initial state ', () => {
        expect(name({name: 'Henry'}, { type: 'unexpected'})).toEqual({
            name: 'Henry'
        })
    })
    it('handle a SET_NAME state', () => {
        expect(name(undefined, { type: 'SET_NAME', name: 'Charlie', payload: true})).toEqual({
            name: 'Charlie',
            payload: true
        })
    })
    it('handle a SET_NAME state', () => {
        expect(name({name:'Mary', payload: false}, { type: 'SET_NAME', name: 'Charlie', payload: true})).toEqual({
            name: 'Charlie',
            payload: true
        })
    })
})