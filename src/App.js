import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Match from './components/Match';
import { currentDate } from './utils/date.js';

function App() {
  const [upcomingMatch, setUpcomingMatch] = useState([]);
  const [finishedMatch, setFinishedMatch] = useState([]);
  const [runningMatch, setRunningMatch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData(date) {
    try {
      let res = await axios({
        method: 'get',
        url: `https://client.elevenscore.com/api/football/match/matchfixtures?date=${date}&utc=7`,
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY
        }
      });
      // console.log(res.data.result)
      setUpcomingMatch(res.data.result.filter(match => match.status === 1).splice(0, 10));
      setFinishedMatch(res.data.result.filter(match => match.status === 8).splice(0, 10));
      setRunningMatch(res.data.result.filter(match => match.status > 1 && match.status < 4));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData(currentDate);
  }, [])

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }
  return (
    <>
      <section className="App">
        <Navbar />
        {runningMatch.length !== 0 ? <h2>Running Match</h2> : null}
        {runningMatch.map((data, index) => <Match key={index} data={data} />)}
        <h2>Upcoming Match</h2>
        {upcomingMatch.map((data, index) => <Match key={index} data={data} />)}
        <h2>Finished Match</h2>
        {finishedMatch.map((data, index) => <Match key={index} data={data} />)}
        <Footer />
      </section>
    </>
  );
}

export default App;
