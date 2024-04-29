import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// const posts = [
//     {
//       id:1,
//       title: "title 1",
//       desc: "lorem ipdum shdcb cshb s jcks jkcd sndcnsjkbce skecbshvkcbhk",
//       img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=sph",

//     },{
//       id: 2 ,
//       title:"tiltle 2",
//       desc: "lorem ipsum dipsum kicksum hacve a nice day ",
//       img : "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
//     },{
//       id:3,
//       title:"title for 3",
//       desc: "hi my name is sudhanva i did some react",
//       img: " https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
//     }
//   ]
export default function Menu({cat}) {
  
  const[posts,setPosts] = useState();
 
  const navigate = useNavigate();
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
          const res= await axios.get(`/posts/?cat=${cat}`)
          setPosts(res.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[cat]);
  return (
    <div className='menu'>
        <h1>other posts you may like</h1>
   { posts ? (

     posts.map( (post)=>(
       <div className='post' key={post.ID}>
            <img src={`../upload/${post.img}`} alt="be happy"/>
           <Link className="link" to = {`/post/${post.ID}`}>
            <h2> {post.title}</h2>
           </Link> 
              <button> Read More</button>
        </div>
    ))  
   ) : 
   (
    <p>Loading...</p>
  )
   }
    </div>
  )
}
