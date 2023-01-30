import React, { useState, useContext, useRef } from "react";

// context
import { allDiscussions } from "../contexts/DiscussionContext";

// functions
import { idGenerator } from "../helper/functions";

// components
import Like from "./Like";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reply = ({ data }) => {
  // inputs data goes here
  const [replyUsername, setReplyUsername] = useState("");
  const [replyText, setReplyText] = useState("");

  // At the end, all the comments go here and the map method is executed on them
  const [reply, setReply] = useState([]);

  // all discussion from context
  const discussions = useContext(allDiscussions);

  // access to input form
  const replyForm = useRef();

  // tostify notifications
  const replyError = () =>
    toast.error("Please fill all inputs", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const commentAdded = () =>
    toast.success("Your comment added", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  let discuss;

  // add reply
  const replyHandler = (e) => {
    e.preventDefault();

    if (replyUsername.length > 0 && replyText.length > 0) {
      discuss = discussions.find((dis) => dis.id === data.id);

      // reply msg data structure
      const replyMsg = {
        id: idGenerator(),
        // i didnt use the time & date because the app is client side and nothing is saved
        date: 1672576574000,
        user: {
          name: replyUsername,
          avatar: "./images/profile.png",
        },
        text: replyText,
        likes: 0,
        iLikedIt: false,
      };
      discuss.replies.push(replyMsg);
      setReply(discuss.replies);

      setReplyUsername("");
      setReplyText("");

      // hide the inputs after comment added
      replyForm.current.classList.remove("flex");
      replyForm.current.classList.add("hidden");

      //  add comment msg
      commentAdded();
    } else {
      // comment error msg
      replyError();
    }
  };

  const openCloseReplyBox = () => {
    if (replyForm.current.classList.contains("hidden")) {
      replyForm.current.classList.remove("hidden");
      replyForm.current.classList.add("flex");
    } else {
      replyForm.current.classList.add("hidden");
      replyForm.current.classList.remove("flex");
    }
  };

  return (
    <div className="flex w-full flex-col mt-4">
      <ToastContainer />
      <button
        onClick={openCloseReplyBox}
        className="text-[#235ee7] absolute top-1 left-[85px] font-[500]"
      >
        Reply
      </button>
      {/* reply */}
      {reply &&
        reply.map((rep) => (
          <div key={rep.id} className="flex mb-5 gap-2">
            <span className="absolute w-[2px] h-full bg-[#f4f5fa] -top-4 -left-8 -z-10"></span>
            <div className="profile-pic w-11 self-start">
              <img
                className="w-11 rounded-full"
                src={rep.user.avatar}
                alt="profile"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="profile-name text-[#2e3035] flex gap-1 items-center">
                <h2 className="font-[600]">{rep.user.name}</h2>
                <span className="text-[13px] text-[#aab1c5]">3h ago</span>
              </div>
              <div className="discussion-text text-[#777f86] text-sm">
                <p className="break-words w-80">{rep.text}</p>
              </div>
              <div className="like-reply flex items-center gap-4 mt-2">
                <Like replyData={rep} type="Reply" />
              </div>
            </div>
          </div>
        ))}
      <form
        onSubmit={replyHandler}
        className="reply w-full my-2 hidden flex-col gap-2"
        ref={replyForm}
      >
        <input
          className="w-full border rounded-lg h-9 px-3 outline-none ring-[#235ee7] focus:ring-2 transition-all duration-300"
          placeholder="Enter your name"
          type="text"
          maxLength="27"
          onChange={(e) => setReplyUsername(e.target.value)}
          value={replyUsername}
        />
        <input
          className="w-full border rounded-lg h-9 px-3 outline-none ring-[#235ee7] focus:ring-2 transition-all duration-300"
          placeholder="Enter your opinion..."
          type="text"
          onChange={(e) => setReplyText(e.target.value)}
          value={replyText}
        />
        <button className="bg-[#235ee7] h-9 text-white rounded-lg">
          Comment
        </button>
      </form>
    </div>
  );
};

export default Reply;
