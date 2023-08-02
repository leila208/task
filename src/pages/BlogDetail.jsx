import React from 'react'
import { Link } from 'react-router-dom';
function BlogDetail() {
  return (
    <>
      <section className="blog-main">
        <div className="wrapper">
          <div className="blog-heading">
            <div className="head-text">
              <h1 className="first-text">FROM OUR BLOG</h1>
              <div id="line"></div>
            </div>
            <h1 className="title">Latest Article</h1>
          </div>
          <div className="blog-container">
            {/* {blogs.map((blog) => ( */}
              <>
                {/* <Link className="blog-box" to={`/blogdetails/${id}`}> */}

                <div className="box-container">
                  <div className="image-container">
                    <div className="image-title">
                      <p></p>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <div className="box-description">
                    <div className="box-title">
                      <h1 className="heading"></h1>
                    </div>
                    <div className="box-subtitle">
                      <p className="subheading">...</p>
                      <div className="line-bottom"></div>
                    </div>
                  </div>
                  <div className="post-publish">
                    <div className="post-date">
                      <p className="mr-10">kjhkuh</p>
                    </div>
                    <p>/</p>
                    <div className="post-comment">
                      <p className="ml-10"> comments</p>
                    </div>
                  </div>
                </div>

                {/* </Link> */}
              </>
            {/* ))} */}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail