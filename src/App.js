import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar'
import './App.css';
import Home from './pages/Home'
import Footerr from './components/Footerr'
import Document from './pages/Document'
import ScrollToTop from './components/ScrollToTop'
import DocumentTran from './pages/DocumentTran'
import DocumentLe from './pages/DocumentLe'
import DocumentNguyen from './pages/DocumentNguyen'

const { Header, Content, Footer } = Layout;
function App() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <Router>
      <Layout >
        <Header className={scroll ? 'scroll' : 'mainlayout'} >
          <Navbar />
        </Header>
        <Content>
          <ScrollToTop />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Document' exact component={Document} />
            <Route path='/DocumentTran' exact component={DocumentTran} />
            <Route path='/DocumentLe' exact component={DocumentLe} />
            <Route path='/DocumentNguyen' exact component={DocumentNguyen} />
          </Switch>
        </Content>

        <Footerr />

      </Layout>
    </Router>
  );
}

export default App;
