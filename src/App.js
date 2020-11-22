import { useState, useEffect} from 'react';
import Map from "./components/Map";
import Loader from "./components/Loader";


function App() {

  const [eventData, setEventData]  = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async() => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      // link from api className="nasa gov".

      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    //call fecth events
    fetchEvents()
  }, [] )
   //add an empty 2nd dependency array as a non event
  

    return ( 
      <div>
        {/*replace this with Map <h1> Welcome To The App</h1> */}
        {/* <Map /> replaced with the ff */}
         {!loading ? <Map eventData={eventData} /> : <Loader /> }
         {/* refresh and see the page loading before the map */}
      </div>
    );
}

export default App;