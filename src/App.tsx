import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Details from './pages/details';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Details></Details>}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
