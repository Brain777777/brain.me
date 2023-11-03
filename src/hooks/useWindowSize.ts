import { useEventListener, useMount, useSetState } from 'ahooks';
import { isBrowser } from '~/utils/constant';

export function useWindowSize (initialWidth = Infinity, initialHeight = Infinity) {
  const [state,setState] = useSetState({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  })
  const handle =  () => {
    setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useMount(handle)
  useEventListener('resize',handle)
  return state
}
