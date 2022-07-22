import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent(virtualDom, container) {
  let nextVirtualDom = null;
  // 判断组件是类组件还是函数组件
  if (isFunctionComponent(virtualDom)) {
    console.log("---函数组件");
    nextVirtualDom = buildFunctionComponent(virtualDom);
    console.log("---nextVirtualDom,", nextVirtualDom);
    // mountNativeElement(nextVirtualDom);
  }
}

function buildFunctionComponent(virtualDom) {
  // virtualDom.type 函数式组件中是一个函数，调用这个函数
  return virtualDom.type();
}
