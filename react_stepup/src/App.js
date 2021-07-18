import { BrowserRouter, Link } from 'react-router-dom'

import React from 'react';
import './App.css';
import { InlineStyle } from './components/variouscss/InlineStyle';
import { CssModules } from './components/variouscss/CssModules';
import { StyledJsx } from './components/variouscss/StyledJsx';
import { StyledComponent } from './components/variouscss/StyledComponent';
import { Emotion } from './components/variouscss/Emotion';
import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';
import { RecoilRoot } from "recoil";
import { PrimaryButton } from './components/atomic_design/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atomic_design/atoms/button/SecondaryButton';
import axios from 'axios';



export const App = () => {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.data.map((data) => {
        alert(data.id)
      })
    }).catch((err) => {
      console.log(err);
    });
  };
  const onClickUser1 = () => {
    alert('test2');
  };
  return (
    <>
      <h2 className="section2">Json取得処理</h2>
      <div className="GetJson">
        <SecondaryButton onClick={onClickUsers}>Users</SecondaryButton>
        <SecondaryButton onClick={onClickUser1}>id=1のuser</SecondaryButton>

      </div>

      <h2 className="section2">ユーザ管理画面</h2>
      <BrowserRouter>
        <RecoilRoot>
          <UserProvider>
            <Router />
          </UserProvider>
        </RecoilRoot>
        <br /><br /><br /><br />
        <br />

        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/Page1">Page1</Link>
          <br />
          <Link to="/Page2">Page2</Link>
        </div>
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponent />
        <Emotion />
      </BrowserRouter>
    </>
  );
}