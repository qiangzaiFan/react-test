import createDomElement from "./createDomElement";

export default function mountNativeElement(virtualDom, container) {
  let newElement = createDomElement(virtualDom);

  // 将转换之后的DOM对象放置在页面中
  container.appendChild(newElement);
}
