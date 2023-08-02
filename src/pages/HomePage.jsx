
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
function HomePage() {
    const [blogs,setBlogs]=useState([])
  return (
    <>
      <div className="basket-image">
        <img
          src="https://cdn.thewirecutter.com/wp-content/media/2022/06/summer-camp-2048px-1199232997-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
          alt=""
        />
        <div className="links">
          <NavLink end to="/">
            Home
          </NavLink>

          <div className="text">
            <h1>Blog & News</h1>
          </div>
        </div>
      </div>
      <section className="">
        <div className="wrapper df">
          <div className="blog-section">
            {/* {blogs.map((blog) => ( */}
            <Link
              // key={blog.id}
              // to={`/blogdetails/${blog.id}`}
              className="blogpage-section"
            >
              <div className="myblogs-container">
                <div className="blog-qutu">
                  <img
                    src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg"
                    alt=""
                  />
                  <h1>Bloq adi</h1>
                  <p>Bloq haqda</p>
                  {/* <img src={blog.image}  />
                    <h1>{blog.name}</h1>
                    <p>{blog.description.slice(0, 150)}... .</p> */}
                </div>
              </div>
            </Link>
            <Link
              // key={blog.id}
              // to={`/blogdetails/${blog.id}`}
              className="blogpage-section"
            >
              <div className="myblogs-container">
                <div className="blog-qutu">
                  <img
                    src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg"
                    alt=""
                  />
                  <h1>Bloq adi</h1>
                  <p>Bloq haqda</p>
                  {/* <img src={blog.image}  />
                    <h1>{blog.name}</h1>
                    <p>{blog.description.slice(0, 150)}... .</p> */}
                </div>
              </div>
            </Link>
            <Link
              // key={blog.id}
              // to={`/blogdetails/${blog.id}`}
              className="blogpage-section"
            >
              <div className="myblogs-container">
                <div className="blog-qutu">
                  <img
                    src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg"
                    alt=""
                  />
                  <h1>Bloq adi</h1>
                  <p>Bloq haqda</p>
                  {/* <img src={blog.image}  />
                    <h1>{blog.name}</h1>
                    <p>{blog.description.slice(0, 150)}... .</p> */}
                </div>
              </div>
            </Link>
            <Link
              // key={blog.id}
              // to={`/blogdetails/${blog.id}`}
              className="blogpage-section"
            >
              <div className="myblogs-container">
                <div className="blog-qutu">
                  <img
                    src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg"
                    alt=""
                  />
                  <h1>Bloq adi</h1>
                  <p>Bloq haqda</p>
                  {/* <img src={blog.image}  />
                    <h1>{blog.name}</h1>
                    <p>{blog.description.slice(0, 150)}... .</p> */}
                </div>
              </div>
            </Link>
            {/* ))} */}
          </div>

          <div className="blog-categories  ml-5">
            <div className="search-button ">
              <input
                // value={blogName}
                // onChange={handleSearch}
                type="text"
                placeholder="Search Blogs..."
              />
              <button className="search-icon df">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <h1>Category</h1>
            <ul className="categories-ul">
              {blogs.map((blogg) => {
                console.log(blogg); // add this line to inspect the blogg objects
                return (
                  <>
                    {/* <li
                      data-id={
                        blogg.category.id ? blogg.category.id.toString() : ""
                      }
                      onClick={handleFilter}
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                      {blogg.category.name}
                    </li> */}
                    <div id="category-line"></div>
                  </>
                );
              })}
              {/* <button onClick={allProducts}>Return To All Products.</button> */}
            </ul>
            <div className="item">
              <div className="super-sale mt-12">
                <img
                  src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg"
                  alt=""
                />
                <div className="super-sale-info border">
                  <h1 className="text-base">Super Sale Up To OFF 50%</h1>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  </p>
                  <NavLink end to="/camplevazimat" className="btn-transparent">
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="hiking-coach">
              <div className="artis">
                <div className="artistimg">
                  <img src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg" />
                </div>
                <div className="artisttext">
                  <h1>Hiking Coach</h1>
                  <p>
                    Nunc class nec habitasse vel nullam at tempus. Semper eget
                    placerat dictum egestas ut tempus aenean cras lectus mollis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage