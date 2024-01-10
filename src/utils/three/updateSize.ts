import * as THREE from 'three'

export const updateSize = (
  dom: HTMLElement,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGL1Renderer
) => {
  if (dom) {
    // eslint-disable-next-line no-param-reassign
    camera.aspect = dom.offsetWidth / dom.offsetHeight
    camera.updateProjectionMatrix()
    renderer.setSize(dom.clientWidth, dom.clientHeight)
  }
}
export default {
  updateSize
}
