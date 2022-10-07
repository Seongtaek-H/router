import React from 'react';
import { Route, Router } from './components/components';
import { Root } from './page/root';
import { About } from './page/about';

function App() {
  return (
    <Router>
      <Route path='/' component={<Root />} />
      <Route path='/about' component={<About />} />
    </Router>
  );
}

export default App;
