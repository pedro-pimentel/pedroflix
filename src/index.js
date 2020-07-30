import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import './index.css';
import Home from './pages/home/App';



//Criar uma página 404 legal
const Pagina404 = () => (<div>Erro 404</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={ Pagina404 } />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
