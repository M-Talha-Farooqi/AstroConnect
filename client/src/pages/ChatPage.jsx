import React, { useState } from "react";
import Cookies from "universal-cookie";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import ChannelListContainer from "../components/chat/ChannelListContainer";
import ChannelContainer from "../components/chat/ChannelContainer";
import Auth from "../components/chat/Auth";
import "../components/chat/ChatPage.scss";

const cookies = new Cookies();
const apiKey = "mn5gqgw5fvk9";
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("spaceStationNumber"),
    },
    authToken
  );
}

const ChatPage = () => {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Auth />; 

  return (
    <div className="chat-app-wrapper">
      <div className="app__wrapper">
        <Chat client={client} theme="team light">
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
          />
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />
        </Chat>
      </div>
    </div>
  );
};
export default ChatPage;
