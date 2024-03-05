// App.js
import React, { useState } from "react";

import "./App.css"; // Make sure to import your CSS file
// import cover from './videos/cover.png'
import ReactPlayer from 'react-player'
import playlist from "./Playlist";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MdMovieFilter } from "react-icons/md";

const App = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  function PlayThisVideo(index) {
    setCurrentVideoIndex(index);
  }

  const filteredPlaylist = playlist.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App font-mono">
      <div className="header flex items-center justify-center">
      <BsFillCollectionPlayFill className="text-4xl mr-4" />
         <h1 className="text-4xl font-bold ">The BigShow</h1>
         <BsFillCollectionPlayFill className="text-4xl ml-4" />
      </div>
      <div className="container">
         <div className="mainframe flex items-center  justify-around flex-col">
           <ReactPlayer url={playlist[currentVideoIndex].videoUrl} width='95%'
          height='100%' autoplay light={<img src={playlist[currentVideoIndex].thumbnailUrl} alt='Thumbnail' className="cover" />}  controls className="player shadow-lg  rounded-xl mt-30" />
            <div className="videoInfo p-4">
               <div className="flex justify-around head">
               <MdMovieFilter className="mr-5 icon" />
                <h1 className="text-4xl text-center flex font-bold title">{playlist[currentVideoIndex].title}</h1>
               </div>
               <h3 className="text-center pt-5 text-justify" width="60%">{playlist[currentVideoIndex].Desc}</h3>
            </div>
         </div>
         <div className="playlist flex flex-col">
           <input
            type="text"
            placeholder="Search by video title"
            className="search p-2 border-0 outline-0 rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {
            filteredPlaylist.map((video,index) =>
            {
              return (
              <div className={`list flex rounded-xl m-5 p-2 cursor-pointer shadow-lg ${
                currentVideoIndex === index ? "active" : ""
              }`} key={index}  onClick={() => PlayThisVideo(index)}>
                <img src={video.thumbnailUrl}  alt="cover" />
                <div className="ListvideoInfo">
                  <h4 className="font-bold pl-5 title">{video.title}</h4>
                  <p className="pl-5 p-1 font-semibold">{video.Desc ? video.Desc.substring(0, 20) : ''}</p>

                </div>
              </div> )
            })
          }

          </div>

      </div>
      
      {/* <VideoPlayer playlist={playlist} /> */}
    </div>
  );
};

export default App;
