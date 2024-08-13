import { show } from './sayHello';
import { setCounter } from './setCount'

document.querySelector('#app')!.innerHTML = `
    <div>
        <button id="counter" type="button"></button>
    </div>
`
setCounter(document.querySelector('#counter')! as HTMLButtonElement)
show('Hello world!');