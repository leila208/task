import React from 'react'
import { Link ,NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import StarRatings from "react-star-ratings";
function BlogDetail() {
  //  let { id } = useParams();
   const [blog, setBlog] = useState({});
   console.log(blog);
   const [comment, setComment] = useState([]);
   const [showAllComments, setShowAllComments] = useState(false);

   //comments
   const handleReadMoreClick = () => {
     setShowAllComments(true);
   };

   const displayedComments = showAllComments ? comment : comment.slice(0, 3);

  //  console.log(user);
  
   const [input, setInput] = useState({
     content: "",
     rating: 0,
    //  blog: id,
    //  user: window.localStorage.getItem("user_id"),
     // blog:blog.name,
     // user:user.user.username
   });
   const initialInputState = {
     content: "",
     rating: 0,
    //  blog: id,
    //  user: window.localStorage.getItem("user_id"),
   };
   const resetInput = () => {
     setInput(initialInputState);
     setStar(0);
   };
   const [star, setStar] = useState(null);
   const [hover, setHover] = useState(null);
  //  useEffect(() => {
  //    fetch(`http://127.0.0.1:8080/comment/blogdetail/${id}/`)
  //      .then((a) => a.json())
  //      .then((a) => {
  //        setBlog(a), setComment(a.comment);
  //      });
  //  }, []);
   const handleChange = (e) => {
     setInput({ ...input, [e.target.name]: e.target.value });
   };
   const handleForm = async (e) => {
     e.preventDefault();
     const a = await fetch("http://127.0.0.1:8080/comment/create", {
       method: "POST",
       mode: "cors",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify(input),
     })
       .then((a) => a.json())
       .then((a) => a);
   };
   return (
     <>
       <div className="basket-image">
         <img
           src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
           alt=""
         />
         <div className="links">
           <NavLink end to="/">
             Home
           </NavLink>

           <div className="text">
             {/* <h1>{blog.name}</h1> */}
            <h1>Bloq adi</h1>
           </div>
         </div>
       </div>
       <div className="detailed-blog ">
         <div className="wrapper df gap-10">
           <div className="blog-detail">
             <img
               src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
               alt=""
             />
             <h1>Bloq adi</h1>
             <p>Bloq haqda</p>
             {/* <img src={blog.image} alt="" />
             <h1>{blog.name}</h1>
             <p>{blog.description}</p> */}
           </div>
         </div>
         <hr />
       </div>
       <div className="reviews-detailed-blogs">
         {/* <h1 className="costumer-review">Musteri deyerlendirmeleri</h1> */}
         <hr />
         {comment.length ? (
           <div className="wrapper">
             <div className="wrapper">
               {displayedComments.map((comment) => (
                 <div key={comment.id}>
                   {/* <h1>{user.toUpperCase()}</h1> */}
                   <StarRatings
                     rating={comment.rating}
                     starRatedColor="orange"
                     starDimension="20px"
                     starSpacing="5px"
                   />
                   <p>{comment.content}</p>
                 </div>
               ))}
               {!showAllComments && comment.length > 3 && (
                 <button
                   className="read-more-comments"
                   onClick={handleReadMoreClick}
                 >
                   Read More
                 </button>
               )}
             </div>
           </div>
         ) : (
           <h1 className="text-center">Komment yoxdur...</h1>
         )}
       </div>
       <hr />
       <div className="add-review-blogs">
         <div className="wrapper">
           <h1>Leave a reply</h1>
           <form
           //  onSubmit={(e) => {
           //    handleForm(e), resetInput();
           //  }}
           >
             <label htmlFor="comment">Comment</label>
             <input
               className="comment-input"
               type="text"
               name="content"
               id="content"
               placeholder="Leave your comment"
               value={input.content}
               onChange={handleChange}
             />
             <p>Your rating *</p>
             <div className="star-layout">
               {[...Array(5)].map((a, i) => {
                 const ratingValue = i + 1;

                 return (
                   <>
                     <label id="star">
                       <input
                         type="radio"
                         //  onClick={(e) => {
                         //    setStar(ratingValue), handleChange(e);
                         //  }}
                         name="rating"
                         id="star"
                         value={ratingValue}
                       />
                       {/* <FaStar
                         onMouseEnter={() => setHover(ratingValue)}
                         onMouseLeave={() => setHover(null)}
                         color={
                           ratingValue <= (star || hover)
                             ? "#ffc107"
                             : "#e4e5e9"
                         }
                         className="star-icon"
                       /> */}
                     </label>
                   </>
                 );
               })}
             </div>
             {star && <p>Your Rating is {star}</p>}
             <button className="post-comment">Post your comment</button>
           </form>
         </div>
       </div>
    
     </>
   );
}

export default BlogDetail