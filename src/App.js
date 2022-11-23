import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import store from './redux/configureStore';
import { fetchGreeting } from './redux/greetings/greetingsSlice';

store.dispatch(fetchGreeting());

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
