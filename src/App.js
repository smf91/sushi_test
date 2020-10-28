import './App.scss';
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import HeaderContainer from './component/Header/HeaderContainer'
import FooterContainer from './component/Footer/FooterContainer'
import MainContainer from './component/Main/MainContainer'
import CatalogContainer from './component/Catalog/CatalogContainer'

const App = ({ store }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <HeaderContainer />
          <div className="wrapper">
            <Route exact path='/' render={() => <MainContainer />} />
            <Route path='/catalog/:foodType' render={() => <CatalogContainer />} />
          </div>
          <FooterContainer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default connect(null, {})(App)
