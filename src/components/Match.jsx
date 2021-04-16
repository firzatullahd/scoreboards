import React from "react";
import { getMonth } from "../utils/date";

export default function Match({ data }) {
  console.log(data.status);
  const year = data.matchTime.split("-");
  const date = year[2].split("T");
  const month = getMonth(year[1]);
  const startTime = date[1].slice(0, 5);

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
    </div>
  );
}
