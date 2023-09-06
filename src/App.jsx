import { useEffect } from "react";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async() =>{

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