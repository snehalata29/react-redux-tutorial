import React from 'react';
import { Switch, Route } from 'react-router';
import { Suspense, lazy } from 'react';
//import Settings from '../../components/Login/setting/setting';
import login from '../../components/Login/login';

const Login = React.lazy(() => import('../../components/Login/login'));
const Settings = React.lazy(() => import('../../components/Login/settings/setting'))

const LoginContainer = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='' component={login} />
          <Route path='/login/settings' component={Settings} />
        </Suspense>
      </Switch>

      {/* <Switch>
          <Route path='/settings' component={Settings}/>
        </Switch>  */}
    </>
  )
}

export default LoginContainer;