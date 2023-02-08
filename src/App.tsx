import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Details from './pages/details';

function App() {
  axios.defaults.baseURL = 'http://localhost:8080/api/v1';
  axios.defaults.headers.common['Authorization'] = "RANDOM_TOKEN";
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
