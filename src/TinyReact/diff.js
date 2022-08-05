import mountElement from "./mountElement";
import updateTextNode from "./updateTextNode";

export default function diff(virtualDom, container, oldDom) {
  const oldVirturalDom = oldDom && oldDom._virtualDom;
  // 判断oldDom是否存在
  if (!oldDom) {
    // 如果不存在 不需要对比 直接将 Virtual DOM 转换为真实 DOM
    mountElement(virtualDom, container);
    // 两个元素类型如果类型相同
  } else if (oldVirturalDom && virtualDom.type === oldVirturalDom.type) {
    // 修改的是文本节点
    if (virtualDom.type === "text") {
      // 更新内容
      updateTextNode(virtualDom, oldVirturalDom, oldDom);
    } else {
      // 更新元素
    }

    // 遍历 virtualDom 的子元素
    virtualDom.children.forEach((child, i) => {
      diff(child, oldDom, oldDom.childNodes[i]);
    });
  }
}
