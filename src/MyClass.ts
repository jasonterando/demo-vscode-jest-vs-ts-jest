export class MyClass {
    public good = () => {
        let i = 0
        i = i + 1
        return i
    }

    public bad = () => {
        throw new Error('Nee!')
    }
}