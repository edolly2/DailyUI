import CTA from './Day-01/SignUpForm/CTA';
import Layout from './Day-01/SignUpForm/Layout';
import { useState } from 'react';
import Form from './Day-01/SignUpForm/Form';
import "./App.css";

function App() {
  const [formActive, setFormActive] = useState(false);
  return (
    <div className="App">
      <Layout>
        <CTA onClick={() => { setFormActive(true) }} />
        <Form style={{ display: formActive ? 'flex' : 'none' }} />
      </Layout>
    </div>
  );
}

export default App;
