import React, { useState } from "react";
import { getMonth } from "../utils/date";
import { AiFillCaretDown } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import axios from "axios";

export default function Match({ data }) {
  const [matchAnalytics, setMatchAnalytics] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const year = data.matchTime.split("-");
  const date = year[2].split("T");
  const month = getMonth(year[1]);
  const startTime = date[1].slice(0, 5);
  const handleGetAnalytics = async () => {
    setIsActive(!isActive);
    if (!isActive && matchAnalytics == null) {
      let res = await axios({
        method: "get",
        url: `https://client.elevenscore.com/api/football/match/live/${data.gameId}`,
        headers: {
          "X-Api-Key": process.env.REACT_APP_API_KEY,
        },
      });
      console.log(res.data.techStats);
      setMatchAnalytics(res.data.techStats);
    }
  };
  return (
    <div className="match">
      <h3 className="match__date">{`${date[0]} ${month} ${year[0]}`}</h3>
      <p className="match__country">{data.countryName}</p>
      {data.status === 1 ? (
        <p className="match__status">Starts at {startTime}</p>
      ) : null}
      <div className="match__score">
        <h5>{data.homeTeamEvent.score}</h5>
        <h5>-</h5>
        <h5>{data.awayTeamEvent.score}</h5>
      </div>
      <div className="match__content">
        <div className="match__home-team">
          <img src={data.homeTeamEvent.logoUrl} alt="home-logo" />
          <h4>{data.homeTeamEvent.name}</h4>
        </div>

        <div className="match__away-team">
          <img src={data.awayTeamEvent.logoUrl} alt="away-logo" />
          <h4>{data.awayTeamEvent.name}</h4>
        </div>
      </div>
      {data.status === 8 ? (
        <>
          <div
            className="match__analytics"
            onClick={() => handleGetAnalytics()}
          >
            <p>
              {" "}
              <IoAnalyticsOutline size="1rem" />
              Analytics
            </p>{" "}
            <button>
              <AiFillCaretDown size="1.5rem" />
            </button>
          </div>
          {matchAnalytics == null ? (
            ""
          ) : (
            <div className={isActive ? "match__analytics-data" : "hide"}>
              <p>
                {matchAnalytics.map((m, index) => (
                  <div className="match__analytics-data__detail" key={index}>
                    <p>Away: {m.away}</p>
                    <p>Home: {m.home}</p>
                    <p>Event: {m.typeName}</p>
                  </div>
                ))}
              </p>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
