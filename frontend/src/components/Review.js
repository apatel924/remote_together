import React from 'react';
import { Button, Icon } from "@mui/material";
import "../styles/Review.css";
import Map from './Map';

const Review = () => {
  return (

    <div >
      <Button
        className="back-to-search"
        variant="outlined"
        color="primary"
      >
        Back to Search Results
      </Button>

      <Button className="view-all" variant="outlined" color="primary">
        View all
      </Button>
      <div className="divside-panel-building-view-">
        <div className="divbuilding-info">
          <b className="nemesis-coffee">Nemesis Coffee</b>
          <div className="vancouver">Vancouver</div>
        </div>

        <b className="user-reviews">User REviews</b>
        <img
          className="sectionbuilding-carousel-con-icon"
          alt=""
          src="/sectionbuildingcarousel--container@2x.png"
        />
        <div className="divw4efsd1">
          <div className="div">4.4</div>
          <img className="divqbul8c-icon" alt="" src="/divqbul8c@2x.png" />
          <img className="divqbul8c-icon1" alt="" src="/divqbul8c@2x.png" />
          <img className="divqbul8c-icon2" alt="" src="/divqbul8c@2x.png" />
          <img className="divqbul8c-icon3" alt="" src="/divqbul8c@2x.png" />
          <img className="divqbul8c-icon4" alt="" src="/divqbul8c1@2x.png" />
        </div>
        <p className="luna-remotee-1-week-container">
          <span className="luna-remotee-1-week-ago">
            <span className="luna-remotee">{`Luna_Remotee `}</span>
            <i>1 week ago</i>
          </span>
          <span className="luna-remotee-1-week-ago">
            <i>&nbsp;</i>
          </span>
          <span className="luna-remotee-1-week-ago">
            <span>
              They had lots of comfortable seating and the wifi was fast!
            </span>
          </span>
        </p>
        <p className="j-travels-3-weeks-container">
          <span className="luna-remotee-1-week-ago">
            <span className="j-travels">{`J_Travels `}</span>
            <i>3 weeks ago</i>
          </span>
          <span className="luna-remotee-1-week-ago">
            <span>There’s outlets to charge your laptops.</span>
          </span>
        </p>
      </div>
      <div className="divside-panel-building-view-">
        <div className="divbuilding-info">

          <Button
            className="back-to-search"
            variant="outlined"
            color="primary"
          >
            Back to Search Results
          </Button>
          <h1 className="nemesis-coffee1">Nemesis Coffee</h1>
          <h2 className="vancouver1">Vancouver</h2>
        </div>
        <div className="divbuilding-info-amenities-w" user-review-div>
          <Button className="view-all" variant="outlined" color="primary">
            View all
          </Button>
          <div className="divw4efsd">
            <div className="div">4.4</div>
            <img className="divqbul8c-icon" alt="" src="/divqbul8c@2x.png" />
            <img className="divqbul8c-icon1" alt="" src="/divqbul8c@2x.png" />
            <img className="divqbul8c-icon2" alt="" src="/divqbul8c@2x.png" />
            <img className="divqbul8c-icon3" alt="" src="/divqbul8c@2x.png" />
            <img className="divqbul8c-icon4" alt="" src="/divqbul8c1@2x.png" />
          </div>
        </div>
        <h2 className="user-reviews1">User REviews</h2>
        <img
          className="sectionbuilding-carousel-con-icon"
          alt=""
          src="/sectionbuildingcarousel--container@2x.png"
        />
        <div className="divw4efsd1">
          <div className="div">4.4</div>
          <img className="divqbul8c-icon" alt="" src="/divqbul8c@2x.png" />
          <img className="divqbul8c-icon1" alt="" src="/divqbul8c@2x.png" />
          <img className="divqbul8c-icon2" alt="" src="/divqbul8c@2x.png" />
          <img className="divqbul8c-icon3" alt="" src="/divqbul8c@2x.png" />
          <img className="divqbul8c-icon4" alt="" src="/divqbul8c1@2x.png" />
        </div>
        <p className="luna-remotee-1-week-container">
          <span className="luna-remotee-1-week-ago">
            <span className="luna-remotee">{`Luna_Remotee `}</span>
            <i>1 week ago</i>
          </span>
          <span className="luna-remotee-1-week-ago">
            <i>&nbsp;</i>
          </span>
          <span className="luna-remotee-1-week-ago">
            <span>
              They had lots of comfortable seating and the wifi was fast!
            </span>
          </span>
        </p>
        <p className="j-travels-3-weeks-container">
          <span className="luna-remotee-1-week-ago">
            <span className="j-travels">{`J_Travels `}</span>
            <i>3 weeks ago</i>
          </span>
          <span className="luna-remotee-1-week-ago">
            <span>There’s outlets to charge your laptops.</span>
          </span>
        </p>
      </div>
    </div>

  );
};

export default Review;
