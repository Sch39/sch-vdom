export default function createVDOM(type, props, ...children) {
  return { type, props, children };
}
