import { useState } from 'react';

export function useRafFn (fn:() =>void,options:{immediate?:boolean}) {
  const { immediate = true} = options
  const [isActive,set] = useState(false)

  let rafId: null | number = null

  function loop(timestamp: DOMHighResTimeStamp) {
    if (!isActive || !window)
      return
    fn()
    rafId = window.requestAnimationFrame(loop)
  }
   
  function resume() {
    if (!isActive && window) {
      set(true)
      rafId = window.requestAnimationFrame(loop)
    }
  }

}
