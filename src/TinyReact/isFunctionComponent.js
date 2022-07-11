import isFunction from "./isFunction";

export default function isFunctionComponent(virtualDom) {
  const type = virtualDom && virtualDom.type;
  return type && isFunction(type) && !(type.prototype && type.prototype.render);
}
