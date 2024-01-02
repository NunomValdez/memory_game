import { useState, useEffect } from "react";
// import axios from "axios";
// import { createClient } from "pexels";
import * as mockedData from "./mocked_data_pexels.json";

// const API_KEY = import.meta.env.VITE_API_PEXELS_TOKEN;
// const client = createClient(API_KEY);

//FIXME: uncomment all this when saving the app to GitHub!

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // client.photos
        //   .search({ query: "Nature", orientation: "square", per_page: 6 })
        //   .then((collections) => {
        //     setData(collections);
        //   });
        setData(mockedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        {data ? (
          <ul>
            {data.photos.map((item) => (
              <li key={item.id}>
                <img src={item.src.small} alt={item.alt} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
