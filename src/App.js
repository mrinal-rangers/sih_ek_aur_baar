
import './App.css';
import './Components/style.scss'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Child_int from './Components/Child_int';
import Child_radio from './Components/Child';
import settings from './settings.json'; // Import the JSON data
import { useState } from 'react';
import Child_toggle from './Components/Child_toggle';

function App() {

  const array=[]

  const handleClick = (e) => 
  {
     console.log("Submitted")
     console.log(array)

     for(let i=0; i<settings.length ;i++)
     {
        const id=i+1
      

     }
  };
  
return (
    <div className="app">
      <div className="app-inner">
        <Navbar />

        <div className="middle">


          <div className='mid-top'>
            <h2> Customize Ubuntu Configurations</h2>
            <h3>You can modify the settings for each type of the following functionalities</h3>
          </div>


          <div className='mid-mid' style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {/* //conditionally conder karna hai by using new settings.json */}
          {settings.map((setting, index) => (
          setting.value_type === "bool" ? (
            <Child_radio
              myArray={array} 
              id={setting.id}
              key={index}
              name={setting.name}
              type={`Type: ${setting.type}`}
              description={`${setting.description}`}
              value_type={`Value Type: ${setting.value_type}`}
              schema={`Schema: ${setting.schema}`}
            />
           ) : (
            setting.value_type === "int" && (
              <Child_int
                myArray={array} 
                id={setting.id}
                key={index}
                name={setting.name}
                type={`Type: ${setting.type}`}
                description={`${setting.description}`}
                value_type={`Value Type: ${setting.value_type}`}
                schema={`Schema: ${setting.schema}`}
              />
            )
          )
        ))}

          </div>



        </div>
        {/* <Footer /> */}

            {/* <div className='footer'>
                <button onClick={handleClick}>SUBMIT</button>
                <button>CANCEL</button>
            </div> */}


      </div>
    </div>
  );
}

export default App;
