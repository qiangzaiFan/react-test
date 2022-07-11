/**
 *
 * @param {*} virtualDom
 * @returns
 */
export default function isFunction(virtualDom) {
  return virtualDom && typeof virtualDom === "function";
}
