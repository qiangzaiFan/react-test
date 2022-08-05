import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";

export default function mountComponent(virtualDom, container) {
  let nextVirtualDom = null;
  // 判断组件是类组件还是函数组件
  if (isFunctionComponent(virtualDom)) {
    // 函数组件
    nextVirtualDom = buildFunctionComponent(virtualDom);
  } else {
    // 类组件
    nextVirtualDom = buildClassComponent(virtualDom);
  }
  // 如果，子节点调用了另一个函数组件，判断进行递归调用
  if (isFunction(nextVirtualDom)) {
    mountComponent(nextVirtualDom, container);
  } else {
    mountNativeElement(nextVirtualDom, container);
  }
}

function buildFunctionComponent(virtualDom) {
  // virtualDom.type 函数式组件中是一个函数，调用这个函数
  // 函数式组件添加props属性
  return virtualDom.type(virtualDom.props || {});
}

function buildClassComponent(virtualDom) {
  const component = new virtualDom.type(virtualDom.props || {});
  const nextVirtualDom = component.render();
  return nextVirtualDom;
}
