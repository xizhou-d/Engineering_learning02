export const setCounter = (element: HTMLButtonElement) => {
    let counter: number = 0

    function setCount(num: number) {
        counter = num
        element.innerHTML = `Counter: ${counter}`
    }

    setCount(0)

    element.addEventListener('click', () => setCount(counter + 1))
}