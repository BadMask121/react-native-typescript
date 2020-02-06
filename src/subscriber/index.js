import React from 'react';
import {Subscribe} from 'unstated';
import {store} from '../providers';

export default WrappedComponent => {
  const subscribe = ({...props}) => (
    <Subscribe to={store}>
      {(appstate, authstate) => (
        <WrappedComponent
          appstate={{...appstate}}
          authstate={{...authstate}}
          {...props}
        />
      )}
    </Subscribe>
  );

  return subscribe;
};
