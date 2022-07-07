// Virtual DOM 对象 
// {
//   type: "div",
//   props: null,
//   children: [{type: "text", props: {textContent: "Hello"}}]
// }

/**
 * 创建 Virtual DOM
 * @param {string} type 类型 
 * @param {object | null} props 类型 
 * @param  {createElement[]} children 子元素
 * @return {object} Virtual DOM 
 */
export default function createElement(type,props,...children){
  return {
    type,
    props,
    children
  }
}