import isFunctionComponent from "./isFunctionComponent";
export default function mountComponent(virtualDom, container) {
  if (isFunctionComponent(virtualDom)) {
    console.log("---函数组件");
  }
}
