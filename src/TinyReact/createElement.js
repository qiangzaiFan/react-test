// Virtual DOM 对象
// {
//   type: "div",
//   props: null,
//   children: [{type: "text", props: {textContent: "Hello"}}]
// }

/**
 * 创建 Virtual DOM,需要把文本字符串转化成对象类型，在转化的过程中呢，还要刨出boolean 和 null节点（因为不在页面上展示），还需要可以通过this.props.children拿到子节点的数据
 * @param {string} type 类型
 * @param {object | null} props 类型
 * @param  {createElement[]} children 子元素
 * @return {object} Virtual DOM
 */
export default function createElement(type, props, ...children) {
  // boolean 和 null节点 不显示
  const childElement = [].concat(...children).reduce((result, child) => {
    if (child != false && child != true && child != null) {
      // 判断 child 是否是对象类型
      if (child instanceof Object) {
        // 如果是 什么都不需要做 直接返回即可
        result.push(child);
      } else {
        // 如果不是对象就是文本 手动调用 createElement 方法将文本转换为 Virtual DOM
        result.push(createElement("text", { textContent: child }));
      }
    }
    return result;
  }, []);

  return {
    type,
    props: Object.assign({ children: childElement }, props),
    children: childElement,
  };
}
