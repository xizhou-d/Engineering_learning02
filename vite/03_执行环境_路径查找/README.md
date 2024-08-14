## 执行环境问题
在 node 环境里使用 ESM 必须设置环境信息，package.json 添加 "type": "module"

## 执行路径查找问题
在本 demo 中 
```js
    import { debounce s} from 'lodash-es'
```

直接在 node 环境执行不会有问题，node src/text1.js

如果放在浏览器中执行，
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script type="module" src="./src/test1.js"></script>
    </body>
    </html>
```
会报错：Uncaught TypeError: Failed to resolve module specifier "lodash-es". Relative references must start with either "/", "./", or "../".

原因：ESM 没有路径查找的功能，node 是有路径查找的功能的

```javascript
    // 这种引入方式被称为 bare import, ESM 默认不支持；node 是支持的
    import { debounces } from 'lodash-es'
```

需要使用绝对路径才能找得到