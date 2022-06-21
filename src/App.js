import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Education from './components/Education'
import Skills from './components/Skills'
import Work from './components/Work';
import Projects from './components/Projects';
import CCA from './components/CCA';
import Achievements from './components/Achievements';
import Copyright from './components/Copyright';

import {Helmet} from "react-helmet";

export default function App() {
  return (
    <div className="App">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Gregory's Portfolio Website</title>
                {/* can change href to url u want accordingly */}
                <link rel="canonical" href="http://mysite.com/example" /> 
                <meta name="description" content="Gregory's Portfolio Website" />
          </Helmet>
      <Navbar />
      <Main />
      <Education />
      <Skills />
      <Work />
      <Projects />
      <CCA />
      <Achievements />
      <Copyright />
    </div>
  );
}


