import React, { useState, useContext } from "react";

// contexts
import { allDiscussions } from "../contexts/DiscussionContext";

const Like = ({ data, type, replyData }) => {
  const [likedIt, setLikedIt] = useState(false);
  const [repLikedIt, setRepLikedIt] = useState(false);

  const discussions = useContext(allDiscussions);

  let discuss;

  const likeHandler = () => {
    discuss = discussions.find((dis) => dis.id === data.id);
    discuss.iLikedIt = discuss.iLikedIt ? false : true;

    setLikedIt(discuss.iLikedIt);
  };


  const replayLikeHandler = () => {
    discussions.map((dis) => {
      dis.replies.map(rep => {
        if(rep.id === replyData.id){
          rep.iLikedIt = rep.iLikedIt ? false : true
          
          setRepLikedIt(rep.iLikedIt)
        } 
      })
    });

  };
  return (
    <>
      {type === "Discussion" && (
        <button
          onClick={likeHandler}
          className={`${
            likedIt ? "bg-[#235ee7] text-white" : "bg-[#f4f5fa] text-[#2e3035]"
          }  font-[600] h-8 px-4 flex justify-center items-center self-start gap-2 rounded-full transition-all duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${
              likedIt ? "fill-white" : "fill-[#909ab4]"
            }  w-6 h-6 transition-all duration-300`}
          >
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>
          <span className="w-2">{likedIt ? data.likes + 1 : 0}</span>
        </button>
      )}
      {type === "Reply" && (
        <button
          onClick={replayLikeHandler}
          className={`${
            repLikedIt ? "bg-[#235ee7] text-white" : "bg-[#f4f5fa] text-[#2e3035]"
          }  font-[600] h-8 px-4 flex justify-center items-center gap-2 rounded-full transition-all duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${
              repLikedIt ? "fill-white" : "fill-[#909ab4]"
            }  w-6 h-6 transition-all duration-300`}
          >
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>
          <span className="w-2">{repLikedIt ? replyData.likes + 1 : 0}</span>
        </button>
      )}
    </>
  );
};

export default Like;
