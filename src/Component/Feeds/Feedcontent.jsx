import React from "react";
import "../Feeds/feed.css";
import profile from "../../Assest/profile.jpg";
import event from "../../Assest/event.png";
import content from "../../Assest/content.png";
import picture from "../../Assest/picture.png";
import option from "../../Assest/option.png";
import close from "../../Assest/close.png";
import comment from "../../Assest/comment.png";
import growth from "../../Assest/growth.png";
import thumbs from "../../Assest/thumbs.png";
import send from "../../Assest/send.png";
import post1 from "../../Assest/post1.gif";
import post2 from "../../Assest/post2.jpeg";
import post3 from "../../Assest/post3.jpeg";
import post4 from "../../Assest/post4.jpeg";
const Feedcontent = () => {
  return (
    <div className="Feedcontent">
      <div className="Feedcontent_post card">
        <div className="Feedcontent_profile">
          <img src={profile} alt="" />
          <form>
            <input id="" placeholder="  Start a post" />
          </form>
        </div>
        <div className="Feedcontent_btn">
          <button className="media btn">
            <img src={picture} alt="" />
            &nbsp; Media
          </button>
          <button className="media btn">
            {" "}
            <img src={event} alt="" />
            &nbsp; Event
          </button>
          <button className="media btn">
            <img src={content} alt="" />
            &nbsp; Write article
          </button>
        </div>
      </div>
      <br />

      <div className="feedcontent_post card">
        <div className="feedcontent_post_profile py-2 px-2">
          <div className="post_profile">
            <img src={profile} alt="" />
            <span>Sadan kumar sharma</span>
            <small>liks this</small>
          </div>
          <div className="feedcontent_post_menu">
            <img src={option} style={{ marginLeft: "210px" }} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <hr style={{ color: "black" }} />
        <div className="feeds_post d-flex px-2">
          <div className="feeds_post_profile">
            <img src={profile} alt="" />
            <span>
              Frontend Developer | SEO Specialist | WordPress Enthusiast |
              Blogger
            </span>
          </div>
          <div className="feeds_follow">
            <button className="follow_btn">+ Follow &nbsp;</button>
          </div>
        </div>
        <div className="feed_content px-2">
          <small>Write HTML And CSS 10X Faster.....</small>
          <img src={post1} alt="" />
        </div>
        <hr />
        <div className="feed_commbtn  py-2">
          <button className="like_btn"><img src={thumbs} alt="" /> Like</button>
          <button className="like_btn"> <img src={comment} alt="" /> Comment</button>
          <button className="like_btn"> <img src={growth} alt="" /> Report</button>
          <button className="like_btn"> <img src={send} alt="" /> Send</button>
        </div>
      </div><br />

      <div className="feedcontent_post card">
        <div className="feedcontent_post_profile py-2 px-2">
          <div className="post_profile">
            <img src={profile} alt="" />
            <span>Sadan kumar sharma</span>
            <small>liks this</small>
          </div>
          <div className="feedcontent_post_menu">
            <img src={option} style={{ marginLeft: "210px" }} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <hr style={{ color: "black" }} />
        <div className="feeds_post d-flex px-2">
          <div className="feeds_post_profile">
            <img src={profile} alt="" />
            <span>
              Frontend Developer | SEO Specialist | WordPress Enthusiast |
              Blogger
            </span>
          </div>
          <div className="feeds_follow">
            <button className="follow_btn">+ Follow &nbsp;</button>
          </div>
        </div>
        <div className="feed_content px-2">
          <small>Write HTML And CSS 10X Faster.....</small>
          <img src={post4} alt="" />
        </div>
        <hr />
        <div className="feed_commbtn  py-2">
          <button className="like_btn"><img src={thumbs} alt="" /> Like</button>
          <button className="like_btn"> <img src={comment} alt="" /> Comment</button>
          <button className="like_btn"> <img src={growth} alt="" /> Report</button>
          <button className="like_btn"> <img src={send} alt="" /> Send</button>
        </div>
      </div><br />


      <div className="feedcontent_post card">
        <div className="feedcontent_post_profile py-2 px-2">
          <div className="post_profile">
            <img src={profile} alt="" />
            <span>Sadan kumar sharma</span>
            <small>liks this</small>
          </div>
          <div className="feedcontent_post_menu">
            <img src={option} style={{ marginLeft: "210px" }} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <hr style={{ color: "black" }} />
        <div className="feeds_post d-flex px-2">
          <div className="feeds_post_profile">
            <img src={profile} alt="" />
            <span>
              Frontend Developer | SEO Specialist | WordPress Enthusiast |
              Blogger
            </span>
          </div>
          <div className="feeds_follow">
            <button className="follow_btn">+ Follow &nbsp;</button>
          </div>
        </div>
        <div className="feed_content px-2">
          <small>Write HTML And CSS 10X Faster.....</small>
          <img src={post2} alt="" />
        </div>
        <hr />
        <div className="feed_commbtn  py-2">
          <button className="like_btn"><img src={thumbs} alt="" /> Like</button>
          <button className="like_btn"> <img src={comment} alt="" /> Comment</button>
          <button className="like_btn"> <img src={growth} alt="" /> Report</button>
          <button className="like_btn"> <img src={send} alt="" /> Send</button>
        </div>
      </div><br />

      <div className="feedcontent_post card">
        <div className="feedcontent_post_profile py-2 px-2">
          <div className="post_profile">
            <img src={profile} alt="" />
            <span>Sadan kumar sharma</span>
            <small>liks this</small>
          </div>
          <div className="feedcontent_post_menu">
            <img src={option} style={{ marginLeft: "210px" }} alt="" />
            <img src={close} alt="" />
          </div>
        </div>
        <hr style={{ color: "black" }} />
        <div className="feeds_post d-flex px-2">
          <div className="feeds_post_profile">
            <img src={profile} alt="" />
            <span>
              Frontend Developer | SEO Specialist | WordPress Enthusiast |
              Blogger
            </span>
          </div>
          <div className="feeds_follow">
            <button className="follow_btn">+ Follow &nbsp;</button>
          </div>
        </div>
        <div className="feed_content px-2">
          <small>Write HTML And CSS 10X Faster.....</small>
          <img src={post3} alt="" />
        </div>
        <hr />
        <div className="feed_commbtn  py-2">
          <button className="like_btn"><img src={thumbs} alt="" /> Like</button>
          <button className="like_btn"> <img src={comment} alt="" /> Comment</button>
          <button className="like_btn"> <img src={growth} alt="" /> Report</button>
          <button className="like_btn"> <img src={send} alt="" /> Send</button>
        </div>
      </div>

      
    </div>
  );
};

export default Feedcontent;
