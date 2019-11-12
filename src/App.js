import React from 'react';
import './App.css';
import Header from './common/header'
import { Provider } from 'react-redux';
import { GlobalIconStyle } from './static/iconfont/iconfont.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home'
import store from './store'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalIconStyle />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
      </BrowserRouter>
      
    </Provider>
  );
}

export default App;
