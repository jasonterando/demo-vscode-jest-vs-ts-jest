import { MyClass } from '../src/MyClass';

describe('RouteIdentifierValidation', () => {
    const validation = new MyClass()
    describe('good', () => {
        it('returns 1', () => {
            expect(validation.good()).toEqual(1)
        })
    })
    describe('bad', () => {
        it('returns 1', () => {
            // want this test to fail on purpose
            expect(validation.bad()).toEqual(1)
        })
    })

})