import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import Head from './components/Head';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  return (
    <Provider store={store}>
      <Head />
      <Router>
        <Routes>
          <Route path="/" element={<Body />}/>
            {/* <Route index element={<MainContainer />} /> */}
            <Route path="/watch" element={<WatchPage />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
