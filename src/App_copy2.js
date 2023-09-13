
import './App.css';
import './Components/style.scss'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Child from './Components/Child';
import settings from './settings.json'; // Import the JSON data

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
            {/* Map over the settings.json data and generate Child components */}
            {settings.map((setting, index) => (
              <Child
                key={index}
                name={setting.name}
                type={`Type: ${setting.type}`}
                description={`Description: ${setting.description}`}
                value_type={`Value Type: ${setting.value_type}`}
                schema={`Schema: ${setting.schema}`}
              />
            ))}
          </div>


        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
