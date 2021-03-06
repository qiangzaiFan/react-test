export default function updateNodeElement(newElement, virtualDom) {
  // 获得节点对应的属性对象
  const newProps = virtualDom.props;
  Object.keys(newProps).forEach((propName) => {
    // 获取属性值
    const newPropsValue = newProps[propName];
    // 判断属性是否是事件属性 onClick -> click
    if (propName.slice(0, 2) === "on") {
      // 事件名称
      const eventName = propName.toLowerCase().slice(2);
      // 为元素添加事件
      newElement.addEventListener(eventName, newPropsValue);
    } else if (propName === "value" || propName === "checked") {
      newElement[propName] = newPropsValue;
    } else if (propName !== "children") {
      if (propName === "className") {
        newElement.setAttribute("class", newPropsValue);
      } else {
        newElement.setAttribute(propName, newPropsValue);
      }
    }
  });
}
