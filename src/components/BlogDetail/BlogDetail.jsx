import React from "react";
import BlogDetailCard from "./BlogDetailCard";
import Comment from "./Comment";
import "./BlogDetail.css";
import BlogMedium from "./../Homepage/BlogMedium";
function BlogDetail() {
  return (
    <div className="blogDetail">
      {" "}
      <div className="Categories_header">
        <p> Homepage </p>
        <p style={{ margin: "0 10px" }}>/</p>
        <p>Fruit and vegetables</p>
        <p style={{ margin: "0 10px" }}>/</p>
        <h6>Carrots from Tomissy Farm</h6>
      </div>
      <BlogDetailCard />
      <div className="blogDetailContent">
        <div className="blogDetailSidebar">
          {" "}
          <h6>Tags</h6>
          <div className="blogDetailSidebar_tags">
            <div>Food</div>
            <div>Recepies</div>
            <div>Fresh</div>
            <div>Vegetable</div>
          </div>
          <button className="hold">
            <i class="fas fa-reply"></i>Back to Blog
          </button>
        </div>
        <div className="blogDetailContentInfo">
          <p>
            There’s nothing like a warm cup of tea to start your morning—or
            maybe you’re all about an iced hibiscus on a sunny Saturday
            afternoon. Whether you’re just craving chamomile or are looking to
            ditch your coffee dependency, here’s our go-to guide on
            incorporating a few new teas into your daily routine!{" "}
          </p>
          <br />
          <h6>Morning Ritual // 9:00 AM</h6>
          <p>
            Want that extra morning energy without the caffeine jitters? Switch
            out your morning mug of coffee for a warm, energizing cup of earl
            grey. Serve as is or stir in some milk and honey for extra coziness.
            If you want to spice things up, try chai tea instead! The
            combination of cinnamon, cardamom, and ginger smells amazing and
            gives you that nice little flavor kick to start your day off right.
          </p>
          <br />

          <h6>Mid-day Boost // 2:00 PM</h6>
          <p>
            If you’re feeling a little sluggish post-lunch, beat the afternoon
            slump with some lemon ginger green tea. Green tea can be a great
            alternative to coffee in the afternoon when you want that little
            boost of energy. An added benefit: lemon and ginger work together to
            aid digestion which is especially helpful after lunch. <br />
            <br />
            If you’re not into hot drinks, opt-in for a fruity iced green tea
            instead. Steep some honeydew or peach green tea in hot water for a
            few minutes and then pour over ice until it’s nice and cool. Enjoy
            with a slice of lemon, and you’ll feel refreshed and ready to tackle
            any task.
          </p>
          <br />

          <h6>Evening Calm // 8:00 PM</h6>
          <p>
            Slip on some fuzzy socks, light your favorite candles, and fire up
            the kettle—it’s time to wind down after a long day. Grab yourself a
            soothing cup of lavender chamomile tea and indulge in some
            well-deserved self-love.
          </p>
          <div className="blogShare">
            Share{" "}
            <button>
              <img src="assets/Facebook.png" alt="" />
              Facebook
            </button>
            <button>
              <img src="assets/Pinterest.png" alt="" />
              Pinterest
            </button>
            <button>
              <img src="assets/Twitter.png" alt="" />
              Twitter
            </button>
            <button>
              <img src="assets/LinkedIn.png" alt="" />
              LinkedIn
            </button>
          </div>
          <form action="" className="blogDetailForm">
            <h6>Leave a reply</h6>
            <p>
              Allrady have an account?{" "}
              <span className="underlined hold">Sign in</span> to leave a reply.
            </p>
            <div className="reply_fields">
              <div>
                <p>Name</p>
                <input type="text" placeholder="Name" />
              </div>{" "}
              <div>
                <p>Email address</p>
                <input type="text" placeholder="Email address" />
              </div>
            </div>
            <div className="form_checkbox">
              <label
                class="control control-checkbox"
                style={{ margin: "0 0 22px 0" }}
              >
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
              <p>
                Save my name and email in this browser for a next time comment.
              </p>
            </div>
            <div className="form_comment">
              <p>Comment</p>
              <input type="text" placeholder="Space for your comments" />
              <button>Send a comment</button>
            </div>
            <h6>Comments</h6>
            <div className="comments">
              <Comment
                profilePic="assets/avatar.png"
                author="Author"
                privilege="Admin"
                content="Hi everyone,
we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it."
                date="22. 6. 2020"
              />
              <div className="reply_comment">
                <Comment
                  profilePic="assets/avatar.png"
                  author="Author"
                  privilege="Admin"
                  content="Don’t worry about that, we are happy to read a new stories. The time we had to wait was crazy, but the results are awesome! You did an epic job. Now I just need to a buy one."
                  date="22. 6. 2020"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="related_topics">
        <div className="related_topics_header">
          <h6>Related topics</h6>
          <button>
            Button{" "}
            <i
              class="fa fa-angle-right green"
              style={{
                fontSize: "14px",
                fontWeight: "bolder",
                paddingLeft: "10px",
              }}
            ></i>
          </button>
        </div>
        <div className="topics">
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
          <BlogMedium />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
