/**
 * @Author: jianglei
 * @Date:   2017-10-12 12:06:49
 */
'use strict'
import Vue from 'vue'
export default function treeToArray(
  data,
  expandAll,
  parent = null,
  level = null
) {
  let tmp = []
  Array.from(data).forEach(function(record) {
    if (record._expanded === undefined) {
      Vue.set(record, '_expanded', expandAll)
    }
    let _level = 1
    if (level !== undefined && level !== null) {
      _level = level + 1
    }
    Vue.set(record, '_level', _level)
    // 如果有父元素
    if (parent) {
      Vue.set(record, 'parent', parent)
    }
    tmp.push(record)
    // element-ui 2.7.2版本 table组件中树结构的数据里不能存在 同名的children属性，否则会报错 id重复
    // 原文：https://www.cnblogs.com/changxue/p/10719454.html
    // 所有存在children字段的改名childrens
    if (record.children !== undefined) {
      Vue.set(record, 'childrens', record.children)
      if (record.children && record.children.length > 0) {
        const children = treeToArray(record.children, expandAll, record, _level)
        tmp = tmp.concat(children)
      }
      Vue.delete(record, 'children')
    }
  })
  return tmp
}
