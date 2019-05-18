## 写在前面

此组件仅提供一个创建 TreeTable 的解决思路

## prop 说明

#### _data_

**必填**

原始数据,要求是一个数组或者对象

```javascript
;[
  {
    key1: value1,
    key2: value2,
    childrens: [
      {
        key1: value1
      },
      {
        key1: value1
      }
    ]
  },
  {
    key1: value1
  }
]
```

或者

```javascript
   {
     key1: value1,
     key2: value2,
     childrens: [{
       key1: value1
     },
     {
       key1: value1
     }]
   }
```

#### columns

列属性,要求是一个数组

1. text: 显示在表头的文字
2. value: 对应 data 的 key。treeTable 将显示相应的 value
3. width: 每列的宽度，为一个数字(可选)

如果你想要每个字段都有自定义的样式或者嵌套其他组件，columns 可不提供，直接像在 el-table 一样写即可，如果没有自定义内容，提供 columns 将更加的便捷方便

如果你有几个字段是需要自定义的，几个不需要，那么可以将不需要自定义的字段放入 columns，将需要自定义的内容放入到 slot 中，详情见后文

```javascript
;[
  {
    value: string,
    text: string,
    width: number
  },
  {
    value: string,
    text: string,
    width: number
  }
]
```

#### expandAll

是否默认全部展开，boolean 值，默认为 false

#### evalFunc

解析函数，function，非必须

如果不提供，将使用默认的[evalFunc](./eval.js)

如果提供了 evalFunc,那么会用提供的 evalFunc 去解析 data，并返回 treeTable 渲染所需要的值。如何编写一个 evalFunc，请参考[_eval.js_](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/TreeTable/eval.js)或[_customEval.js_](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/table/treeTable/customEval.js)

#### evalArgs

解析函数的参数，是一个数组

**请注意，自定义的解析函数参数第一个为 this.data，第二个参数为， this.expandAll,你不需要在 evalArgs 填写。一定记住，这两个参数是强制性的，并且位置不可颠倒** _this.data 为需要解析的数据，this.expandAll 为是否默认展开_

如你的解析函数需要的参数为`(this.data, this.expandAll,1,2,3,4)`，那么你只需要将`[1,2,3,4]`赋值给`evalArgs`就可以了

如果你的解析函数参数只有`(this.data, this.expandAll)`,那么就可以不用填写 evalArgs 了

具体可参考[_customEval.js_](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/table/treeTable/customEval.js)的函数参数和[customTreeTable](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/table/treeTable/customTreeTable.vue)的`evalArgs`属性值

## slot

这是一个自定义列的插槽。

默认情况下，treeTable 只有一行行展示数据的功能。但是一般情况下，我们会要给行加上一个操作按钮或者根据当行数据展示不同的样式，这时我们就需要自定义列了。请参考[customTreeTable](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/table/treeTable/customTreeTable.vue)，[实例效果](https://panjiachen.github.io/vue-element-admin/#/table/tree-table)

`slot`和`columns属性`可同时存在,columns 里面的数据列会在 slot 自定义列的左边展示

## 其他

如果有其他的需求，请参考[el-table](http://element-cn.eleme.io/#/en-US/component/table)的 api 自行修改 index.vue
