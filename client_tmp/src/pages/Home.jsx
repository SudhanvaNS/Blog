import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';



export default function Home() {
  const[posts,setPosts] = useState([]);
  const cat = useLocation().search;

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];
  function handleImageLoad(event, postId) {
    const image = event.target;

      const width=0;
      const height=0;
      image.onload = () => {
        width = image.clientWidth;
        height = image.clientHeight;
      };
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    
  }
  

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
          const res= await axios.get(`/posts${cat}`)
       
          setPosts(res.data);
         
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts ?   (
          posts.map((post) => (
            <div className='post' key={post.ID}>
              <div className="img">
                <img src={`../upload/${post.img}`} 
                   onLoad={(e) => handleImageLoad(e, post.ID)}
                alt="be happy" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.ID}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
