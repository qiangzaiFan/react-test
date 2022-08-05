export default function updateTextNode(virtualDom, oldVirturalDom, oldDom) {
  if (virtualDom.props.textContent !== oldVirturalDom.props.textContent) {
    oldDom.textContent = virtualDom.props.textContent;
    oldDom._virtualDom = virtualDom;
  }
}
