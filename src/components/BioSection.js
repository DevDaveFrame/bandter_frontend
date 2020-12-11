import React from "react";
import UserUpdate from "./UserUpdate";
import InstrumentUpdate from "./InstrumentUpdate";
import GenreUpdate from "./GenreUpdate";
import logo from "../placeholder.png"
import Avatar from './Avatar'


function BioSection(props) {
  const user = props.user;
  return (
    <div className="biosection">
      <Avatar image={ user.img_url || logo } alt={user.name} width={'150px'} />
      <h2 className="bio-name">{user.name}</h2>
      <div className="bio-bio">
        <h5>{user.location}</h5>
        <p>{user.narrative}</p>
      </div>
      <div className="bio-instruments">
        <h4 className="bio-header">INSTRUMENTS</h4>
          {user.instruments && user.instruments.length > 0
            ? user.instruments.map((x) => (
                <span key={x.id} className="tags">
                  {x.name}
                </span>
              ))
            : "N/A"}
            <br/>
            {props.user.id === parseInt(localStorage.current, 10) 
      ? <InstrumentUpdate />
      : null}
      </div>
      <div className="bio-genres">
        <h4 className="bio-header">GENRES</h4>
          {user.genres && user.genres.length > 0
            ? user.genres.map((x) => (
                <span key={x.id} className="tags">
                  {x.name}
                </span>
              ))
            : "N/A"}
            <br/>
            {props.user.id === parseInt(localStorage.current, 10) 
      ? <GenreUpdate />
      : null}
      </div>
      {props.user.id === parseInt(localStorage.current, 10) 
      ? <UserUpdate />
      : null}
    </div>
  )
}

export default BioSection;
