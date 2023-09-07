import { useEffect } from "react";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async() =>{
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(()=>{

  } [])
  return <h2>Tabs Starter</h2>;
};
export default App;


// - S7-202:Setup Tabs Project
// - S7-203:cr8 isLoading state equal true
// - S7-203:cr8 jobs state equal empty array
// - S7-203:cr8 fetchJobs function for retrieve data from API with asynchronously
// - S7-203:cr8 useEffect function base include cb function
// - S7-203:cr8 response for await feth url
// - S7-203:cr8 newJobs for response get back JSON
// - S7-203:Add setJobs equal to newJobs
// - S7-203:setIsLoading to false after done on fetchJobs