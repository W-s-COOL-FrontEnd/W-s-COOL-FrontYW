import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import AppLayout from 'components/common/AppLayout';

import Auth from 'library/utils/auth';

const Main = loadable(() => import('pages/Main'));
const Login = loadable(() => import('pages/Login'));
const Register = loadable(() => import('pages/Register'));
const Board = loadable(() => import('pages/Board'));
const BoardDetail = loadable(() => import('components/Board/BoardDetail'));
const MyPage = loadable(() => import('pages/MyPage'));

function App() {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Auth(Main, false)} />
            <Route exact path="/login" component={Auth(Login, false)} />
            <Route exact path="/register" component={Auth(Register, false)} />
            <Route exact path="/home" component={Auth(Main, true)} />
            <Route exact path="/board" component={Auth(Board, true)} />
            <Route
              exact
              path="/board/:boardId"
              component={Auth(BoardDetail, true)}
            />
            <Route path="/mypage" component={Auth(MyPage, true)} />
          </Switch>
        </Suspense>
      </AppLayout>
    </Router>
  );
}

export default App;
