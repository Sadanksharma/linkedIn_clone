import React, { Profiler } from "react";
import "../Rightsidebar/rightsidebar.css";
import profile from '../../Assest/profile.jpg'
const Rightsidebar = () => {
  return (
    <div className="Rightsidebar px-3">
      <div className="Rightsidebar card">
        <span
          className="rightbar_news px-3"
          style={{ backgroundColor: "white" }}
        >
          LinkeIn News
        </span>
        <ul>
          <li>
            <a href="">
              <span style={{ fontWeight: "300", fontSize: "15px" }}>
                15 Big Ideas that will sharp 2024
              </span>
              <br />
              <small>Top news . 211 reader</small>
            </a>
          </li>

          <li>
            <a href="">
              <span style={{ fontWeight: "300", fontSize: "15px" }}>
                15 Big Ideas that will sharp 2024
              </span>
              <br />
              <small>Top news . 211 reader</small>
            </a>
          </li>

          <li>
            <a href="">
              <span style={{ fontWeight: "300", fontSize: "15px" }}>
                15 Big Ideas that will sharp 2024
              </span>
              <br />
              <small>Top news . 211 reader</small>
            </a>
          </li>

          <li>
            <a href="">
              <span style={{ fontWeight: "300", fontSize: "15px" }}>
                15 Big Ideas that will sharp 2024
              </span>
              <br />
              <small>Top news . 211 reader</small>
            </a>
          </li>

          <li>
            <a href="">
              <span style={{ fontWeight: "300", fontSize: "15px" }}>
                15 Big Ideas that will sharp 2024
              </span>
              <br />
              <small>Top news . 211 reader</small>
            </a>
          </li>
        </ul>
      </div> <br />
      <div className="card px-3">
        <span>Full potential with LinkedIn<br/>Premium
        </span>
        <dir className='premium_img_key ' >
          <img style={{height:'80px',width:'80px',borderRadius:'100%'}} src={profile} alt="" />
          <img  style={{height:'80px',width:'80px',borderRadius:'100%'}} src="https://media.licdn.com/dms/image/D5610AQHQzQ1NiuNSUg/image-shrink_1280/0/1692210363051?e=1702134000&v=beta&t=-TmEFai6N8vcKVp4kLiHzD6u9P5tY3-JGCy3CG727lo" alt="" />
        </dir>
        <button className="btn">Try For Free</button>
      </div>

    </div>
  );
};

export default Rightsidebar;
