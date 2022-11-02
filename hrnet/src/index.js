import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './App';
import store from "./app/store"
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

import { ConfigProvider } from 'antd';
import en_GB from 'antd/lib/locale-provider/en_GB';
import moment from 'moment';
import 'moment/locale/en-gb'; 

moment.locale('en-gb');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={en_GB}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
