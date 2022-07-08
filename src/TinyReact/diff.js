import mountElement from "./mountElement";

export default function diff(virtualDom, container, oldDom) {
  // 判断oldDom是否存在
  if (!oldDom) {
    // 如果不存在 不需要对比 直接将 Virtual DOM 转换为真实 DOM
    mountElement(virtualDom, container);
  }
}
