import getClientWindowWidth from 'get-client-window-width';
import getClientWindowHeight from 'get-client-window-height';

export const getClientWindowSize = () => ({
  width: getClientWindowWidth(),
  height: getClientWindowHeight(),
});

export default getClientWindowSize;
