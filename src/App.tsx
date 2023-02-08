import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import logo from './logo.svg';
import Details from './pages/details';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path='/' element={<Details></Details>}></Route>
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
