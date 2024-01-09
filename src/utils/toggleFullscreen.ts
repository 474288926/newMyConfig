export const toggleFullscreen = (element = document.documentElement) => {
  const elem = element as HTMLElement & {
    mozRequestFullScreen?(): Promise<void>
    webkitRequestFullscreen?(): Promise<void>
    msRequestFullscreen?(): Promise<void>
    mozCancelFullScreen?(): Promise<void>
    exitFullscreen?(): Promise<void>
  }
  if (!document.fullscreenElement) {
    // 请求全屏
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen()
    }
  } else {
    // 退出全屏
    // eslint-disable-next-line no-lonely-if
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (elem.mozCancelFullScreen) {
      elem.mozCancelFullScreen()
    }
  }
}

export default {
  toggleFullscreen
}
