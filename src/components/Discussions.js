import React, { useState, useContext } from "react";

// functions
import { idGenerator } from "../helper/functions";

// contexts
import { allDiscussions } from "../contexts/DiscussionContext";

// components
import Like from "./Like";
import Reply from "./Reply";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Discussion = () => {
  // inputs data goes here
  const [username, setUsername] = useState("");
  const [discussionText, setDiscussionText] = useState("");

  // all discussion from context
  const discussions = useContext(allDiscussions);

  // tostify notifications
  const discussionError = () =>
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

  const discussionAdded = () =>
    toast.success("You started a discussion", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  // add discussion
  const addDiscussion = (e) => {
    e.preventDefault();

    if (username.length > 0 && discussionText.length > 0) {
      const newDiscussion = {
        id: idGenerator(),
        // i didnt use the time & date because the app is client side and nothing is saved
        date: 1672576574000,
        user: {
          name: username,
          avatar: "./images/profile.png",
        },
        text: discussionText,
        likes: 0,
        iLikedIt: false,
        replies: [],
      };

      // push new discussion in context array
      discussions.push(newDiscussion);
      setUsername("");
      setDiscussionText("");

      // add discussion msg
      discussionAdded();
    } else {
      // discussion error msg
      discussionError();
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* start a discussion */}
      <form
        onSubmit={addDiscussion}
        className="add-discussion bg-[#fafbfc] p-5 flex flex-col gap-2"
      >
        <input
          className="w-full border rounded-lg h-9 px-3 outline-none ring-[#235ee7] focus:ring-2 transition-all duration-300"
          placeholder="Enter your name"
          type="text"
          maxLength="30"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full border rounded-lg h-9 px-3 outline-none ring-[#235ee7] focus:ring-2 transition-all duration-300"
          placeholder="Start a discussion"
          type="text"
          value={discussionText}
          onChange={(e) => setDiscussionText(e.target.value)}
        />
        <button className="bg-[#235ee7] h-9 text-white rounded-lg">Add</button>
      </form>
      {/* discussions */}
      <div>
        {discussions.map((discuss) => (
          <div
            key={discuss.id}
            className="discussions relative flex flex-col justify-center px-5 pt-3 gap-3 border-b"
          >
            <div className="flex gap-2 z-10">
              <div className="profile-pic w-12 self-start">
                <img className="w-12" src={discuss.user.avatar} alt="profile" />
              </div>
              <div className="flex w-full flex-col gap-1">
                <div className="profile-name text-[#2e3035] flex gap-1 items-center">
                  <h2 className="font-[600]">{discuss.user.name}</h2>
                  <span className="text-[13px] text-[#aab1c5]">3h ago</span>
                </div>
                <div className="discussion-text text-[#777f86] text-sm">
                  <p className="break-words w-96">{discuss.text}</p>
                </div>
                {/* like */}
                <div className="like-reply-btns relative gap-4 mt-2">
                  <Like data={discuss} type={"Discussion"} />
                  <Reply data={discuss} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
