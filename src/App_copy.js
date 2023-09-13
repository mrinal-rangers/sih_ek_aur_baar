
import './App.css';
import './Components/style.scss'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Child from './Components/Child';

function App() {
  return (
    <div className="app">
      <div className="app-inner">
        <Navbar />
        <div className="middle">
          <div className='mid-top'>
            <h2> Customize settings for each type of network</h2>
            <h3>You can modify the firewall settings for each type of network that you use</h3>
          </div>
          <div className='mid-mid' style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {/* The maxHeight and overflowY properties set the container height and scrolling */}
            <Child
              s0="Private network settings"
              s1="Turn on Window firewall"
              s2="Block all incoming connections, including those in the list"
              s3="Notify me when Windows Firewall blocks a new app"
              s4="Turn off Windows Firewall (not recommended)"
            />
            <Child
              s0="Public network settings"
              s1="Turn on Window firewall"
              s2="Block all incoming connections, including those in the list"
              s3="Notify me when Windows Firewall blocks a new app"
              s4="Turn off Windows Firewall (not recommended)"
            />
            <Child
              s0="Public network settings"
              s1="Turn on Window firewall"
              s2="Block all incoming connections, including those in the list"
              s3="Notify me when Windows Firewall blocks a new app"
              s4="Turn off Windows Firewall (not recommended)"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}


export default App;
