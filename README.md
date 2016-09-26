#dom-event-helper
 <h5>增强DOM元素事件操作</h5>
 <h6>主要解决移除事件监听问题,在removeEventListener中不能删除指定的事件名
 用户自定义的事件不包括在内,需要使用提供的API</h6>
##Install
npm install dom-event-helper
##Use
<code>
<pre>
var domEventHelper = require('dom-event-helper');
</pre>
</code>


##Api
1. add  domEventHelper.add(el,event,cb,[useCapture])
   <pre>为元素添加事件监听</pre>
2. remove domEventHelper.remove(el,[event], [callback], [context])
    <pre>元素移除事件监听</pre>
3. Node添加API
   1. addEvent dom.addEvent(event,cb,[useCapture])
        <pre>在dom中添加事件绑定方法addEvent,用法同addEventListener</pre>
   2. removeEvent dom.removeEvent([event], [cb])
        <pre>
        在dom中添加事件移除方法removeEvent,
        事件名存在,则在改事件下删除事件监听,
        不存在则删除全部事件监听
        </pre>
