import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import logo from '../img/ieeee.jpg'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Menu from '../components/Menu.jsx';
import {useContext} from 'react';
import moment from 'moment';
import { AuthContext } from '../context/authContext.js';
export default function Single() {
  
  const[post,setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postID= location.pathname.split("/")[2];
  
  const {currentUser} =useContext(AuthContext);
  const handleDelete = async () =>{
    try{
     await axios.delete(`/posts/${postID}`);
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }
 useEffect(()=>{
    const fetchData = async ()=>{
      try{
          const res= await axios.get(`/posts/${postID}`)
          console.log(res.data+"post");
          setPost(res.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[postID]);
  return (
    <div className='single'>
      <div className="content">
        <img src={`../upload/${post.img}`} alt="be happy" />
          <div className="user">
                    <img src="" alt="profilepic" />
                    <div className="info">
                          <span>{post.username}</span>
                          <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                   {currentUser?.username === post.username && (
                     <div className="edit">
                            <Link to={`/write?edit=2`} state={post}>
                                  <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                    
                    <i onClick={handleDelete} className="fa-solid fa-trash"></i> 
                    </div>  )}
          </div>
          <h1> {post.title}</h1>
         
         {post.desc}
         
      </div>

     <Menu cat={post.cat}/>
    </div>
  )
}
