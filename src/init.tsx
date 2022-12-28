import React from 'react';
import { useGridSignals } from '@ombori/grid-signals-react';
import App from './app';


const {
  REACT_APP_DEVICE_ID,
  REACT_APP_ACCESS_ID,
  REACT_APP_ACCESS_TOKEN,
  REACT_APP_SPACE_ID,
  REACT_APP_TENANT_ID,
  NODE_ENV
} = process.env;

const isProd = NODE_ENV === 'production';

const Init = () => {
  const isSignalsReady = useGridSignals(isProd ? {} : {
    deviceId: REACT_APP_DEVICE_ID,
    accessId: REACT_APP_ACCESS_ID,
    accessToken: REACT_APP_ACCESS_TOKEN,
    spaceId: REACT_APP_SPACE_ID,
    tenantId: REACT_APP_TENANT_ID,
  });

  if (!isSignalsReady) {
    return <div className='init'>Initializing App...</div>
  }

  return <App />
}

export default Init;
