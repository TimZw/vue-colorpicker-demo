# vue-colorpicker-demo

> 基于Vue的颜色选择器插件


## 安装

``` bash
$ npm install vue-colorpicker-demo -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import Colorpicker from 'vue-colorpicker-demo'
Vue.use(Colorpicker)
```

在项目中使用 vue-colorpicker-demo

```js
<template>
  <colorPicker v-model="color" />
</template>
<script>
  export default {
    data () {
      return {
        color: '#ff0000'
      }
    }
  }
</script>
```
## 事件
`change`颜色值改变的时候触发

``` js
<colorPicker v-model="color" v-on:change="headleChangeColor" />
```


