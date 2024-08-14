import { setCounter } from './setCount.ts'

document.querySelector('#app')!.innerHTML = `
    <div>
        <button id="counter" type="button"></button>
    </div>
`
setCounter(document.querySelector('#counter')! as HTMLButtonElement)