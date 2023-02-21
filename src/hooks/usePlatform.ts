import { isServer } from 'solid-js/web';
import { useServerContext } from 'solid-start';
import UAParser from 'ua-parser-js';

const usePlatform = () => {
  const event = useServerContext();

  const getIsMobile = () => {
    const ua = isServer
      ? event.request.headers.get('user-agent') ?? undefined
      : undefined;
    const parser = new UAParser(ua);
    const device = parser.getDevice();
    return device.type === 'mobile';
  };

  const isMobile = getIsMobile();

  return { isMobile };
};

export default usePlatform;
