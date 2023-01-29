import React, { useState } from 'react';
import { Login } from './components/Login';
import { Registration } from './components/Registration';

import styles from './styles/style.module.scss';

export const Authenticate: React.FC = () => {
  const [authType, setAuthType] = useState('Login');

  return (
    <div className={styles.root}>
      {authType === 'Login' ? (
        <Login authType="Login" setAuthType={setAuthType} />
      ) : null}
      {authType === 'Register' ? (
        <Registration authType="Register" setAuthType={setAuthType} />
      ) : null}
    </div>
  );
};
