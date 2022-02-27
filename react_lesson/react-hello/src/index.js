import React from 'react';
//react 支持JSX语法
import ReactDOM from 'react-dom';
//ReactDom 实现DOM渲染
import './index.css';
//样式
import App from './App';
//组件
// import reportWebVitals from './reportWebVitals';
// 利用 ReactDom 的 render 方法渲染 app 组件到页面的 root 上
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
