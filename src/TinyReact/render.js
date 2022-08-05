import diff from "./diff";

/**
 * 把virtualDom 转化为真实的DOM
 * @param {*} virtualDom
 * @param {*} container
 * @param {*} oldDom
 */
export default function render(
  virtualDom,
  container,
  oldDom = container.firstChild
) {
  diff(virtualDom, container, oldDom);
}
