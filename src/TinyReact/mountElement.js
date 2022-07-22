import mountNativeElement from "./mountNativeElement";
import mountComponent from "./mountComponent";
import isFunction from "./isFunction";
/**
 * 在进行 virtual DOM 转换之前还需要确定 Virtual DOM 的类 Component VS Native Element。
类型不同需要做不同的处理 如果是 Native Element 直接转换。
如果是组件 还需要得到组件实例对象 通过组件实例对象获取组件返回的 virtual DOM 然后再进行转换。
<div className="container">
  <h3>Hello React</h3>
  <p>React is great </p>
</div>

function Demo (){
	return <div>Hello React</div>
}
 */
export default function mountElement(virtualDom, container) {
  if (isFunction(virtualDom)) {
    // Component
    mountComponent(virtualDom, container);
  } else {
    // Native element
    mountNativeElement(virtualDom, container);
  }
}
