import React, { useState, useContext } from "react";

// discussions
import { data } from "../discussionData";

// functions
import { idGenerator } from "../helper/functions";

// contexts
import { allDiscussions } from "../contexts/DiscussionContext";

// components
import ILikedIt from "./ILikedIt"

const Discussion = () => {
  const [username, setUsername] = useState("");
  const [discussionText, setDiscussionText] = useState("");

  const discussions = useContext(allDiscussions)

  const addDiscussion = (e) => {
    e.preventDefault();

    const newDiscussion = {
      id: idGenerator(),
      date: 1672576574000,
      user: {
        name: username,
        avatar: "./images/shahyad.jpg",
      },
      text: discussionText,
      likes: 0,
      iLikedIt: false,
      replies: [],
    };

    discussions.push(newDiscussion)
    setUsername("");
    setDiscussionText("");
  };

  return (
    <div>
      {/* start a discussion */}
      <form
        onSubmit={addDiscussion}
        className="add-discussion bg-[#fafbfc] p-5 flex flex-col gap-2"
      >
        <input
          className="w-full border rounded-lg h-9 px-3 outline-none ring-[#235ee7] focus:ring-2 transition-all duration-300"
          placeholder="Enter your name"
          type="text"
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
          <div key={discuss.id} className="dataions relative flex flex-col justify-center px-5 py-3 gap-3 border-b">
            <span className="absolute w-[2px] h-[85%] bg-[#f4f5fa] left-[42px]"></span>
            <div className="flex gap-2 z-10">
              <div className="profile-pic w-11 self-start">
                <img
                  className="w-11 rounded-full"
                  src={discuss.user.avatar}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="profile-name text-[#2e3035] flex gap-1 items-center">
                  <h2 className="font-[600]">{discuss.user.name}</h2>
                  <span className="text-[13px] text-[#aab1c5]">3h ago</span>
                </div>
                <div className="discussion-text text-[#777f86] text-sm">
                  <p className="break-words w-96">{discuss.text}</p>
                </div>
                <div className="like-reply flex items-center gap-4 mt-2">
                  <ILikedIt data={discuss} />
                  <button className="text-[#235ee7] font-[500]">Reply</button>
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

{
  /* discussion reply */
}
{
  /* <div className="flex justify-center gap-2 px-10">
<div className="profile-pic w-20 self-start">
  <img
    className="w-11 rounded-full"
    src="./images/shahyad.jpg"
    alt="profile"
  />
</div>
<div className="flex flex-col gap-1">
  <div className="profile-name text-[#2e3035] flex gap-1 items-center">
    <h2 className="font-[600]">Shahyad Karimi</h2>
    <span className="text-[13px] text-[#aab1c5]">3h ago</span>
  </div>
  <div className="discussion-text text-[#777f86] text-sm">
    <p>
      I think for our second compaign we can try to target a different
      audience. How does it sound for you?
    </p>
  </div>
  <div className="like-reply flex items-center gap-4 mt-2">
    <button className="bg-[#f4f5fa] text-[#2e3035] font-[600] h-8 flex justify-center items-center gap-2 px-4 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="fill-[#909ab4] w-6 h-6"
      >
        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
      </svg>
      <span>2</span>
    </button>
    <button className="text-[#235ee7] font-[500]">Reply</button>
  </div>
</div>
</div>
<div className="flex justify-center gap-2 px-10">
<div className="profile-pic w-20 self-start">
  <img
    className="w-11 rounded-full"
    src="./images/shahyad.jpg"
    alt="profile"
  />
</div>
<div className="flex flex-col gap-1">
  <div className="profile-name text-[#2e3035] flex gap-1 items-center">
    <h2 className="font-[600]">Shahyad Karimi</h2>
    <span className="text-[13px] text-[#aab1c5]">3h ago</span>
  </div>
  <div className="discussion-text text-[#777f86] text-sm">
    <p>
      I think for our second compaign we can try to target a different
      audience. How does it sound for you?
    </p>
  </div>
  <div className="like-reply flex items-center gap-4 mt-2">
    <button className="bg-[#f4f5fa] text-[#2e3035] font-[600] h-8 flex justify-center items-center gap-2 px-4 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="fill-[#909ab4] w-6 h-6"
      >
        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
      </svg>
      <span>2</span>
    </button>
    <button className="text-[#235ee7] font-[500]">Reply</button>
  </div>
</div>
</div> */
}
