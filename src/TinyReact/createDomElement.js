import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
/**
 * 需要多次重复调用，从mountNativeElement 中抽取出来
 * @returns
 */
export default function createDomElement(virtualDom) {
  let newElement = null;
  //看看节点类型是文本类型还是元素类型
  if (virtualDom.type === "text") {
    // 创建文本节点，设置节点内容
    newElement = document.createTextNode(virtualDom.props.textContent);
  } else {
    // 根据Virtual DOM type属性创建DOM元素
    newElement = document.createElement(virtualDom.type);
    updateNodeElement(newElement, virtualDom);
  }

  // 递归渲染子节点
  virtualDom.children.forEach((element) => {
    mountElement(element, newElement);
  });

  return newElement;
}
