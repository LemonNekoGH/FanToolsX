import backClick from '../assets/audio/g_ui_back.wav'
import normalClick from '../assets/audio/g_ui_btn_n.wav'
import confirmClick from '../assets/audio/g_ui_confirm.wav'

export function useBtnClickSound() {
  return {
    playBackClickSound() {
      const a = document.createElement('audio')
      a.src = backClick
      a.play()
    },
    playNormalClickSound() {
      const a = document.createElement('audio')
      a.src = normalClick
      a.play()
    },
    playConfirmClick() {
      const a = document.createElement('audio')
      a.src = confirmClick
      a.play()
    },
  }
}
