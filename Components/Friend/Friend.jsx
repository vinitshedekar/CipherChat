import React, { useState, useContext } from "react";
import Image from "next/image";


//Internal Import
import Style from "./Friend.module.css";
import images from "../../assets";
import Card from "./Card/Card";
import Chat from "./Chat/Chat";

import { ChatAppContext } from "../../Context/ChatAppContext";

const Friend = () => {

  // const array = [1,2,3,4,5];

  const {
    sendMessage,
    account,
    friendLists,
    readMessage,
    readUser,
    userName,
    loading,
    friendMsg,
    currentUserName,
    currentUserAddress,
  } = useContext(ChatAppContext);

  return (
    <div className={Style.Friend}>
      <div className={Style.Friend_box}>
        <div className={Style.Friend_box_left}>
          {friendLists.map((el, i) => (
            <Card key={i + 1}
              el={el} i={i}
              readMessage={readMessage}
              readUser={readUser}
            />
          ))}
        </div>
        <div className={Style.Friend_box_right}>
          <Chat
            functionName={sendMessage}
            readMessage={readMessage}
            friendMsg={friendMsg}
            account={account}
            userName={userName}
            loading={loading}
            currentUserName={currentUserName}
            currentUserAddress={currentUserAddress}
            readUser={readUser}
          />
        </div>
      </div>
    </div >
  );
};

export default Friend;
