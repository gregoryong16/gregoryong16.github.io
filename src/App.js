import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
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
    </div>
  );
}


