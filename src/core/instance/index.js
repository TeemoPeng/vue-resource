import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'


// 实现Vue构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 初始化
  this._init(options)
}

initMixin(Vue)  // 初始化mixin 
stateMixin(Vue) // 初始化各种状态 $data, $props, $set, $delete, $watch
eventsMixin(Vue) // 事件初始化 $emit, $on, $off, $once
lifecycleMixin(Vue) // 声明周期初始化 _update, $forceUpdate, $destory
renderMixin(Vue) // 渲染api，_render, $nextTick

export default Vue
