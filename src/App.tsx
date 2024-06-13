import { Dispatch, SetStateAction, useState } from "react";

import MainUser from "./Components/MainUser";
import { UserContext } from "./Components/NotificationContext";

export interface User {
  liked: boolean;
  setLiked: Dispatch<SetStateAction<boolean>>;
  retweet: boolean;
  setRetweet: Dispatch<SetStateAction<boolean>>;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
}

export default function App() {
  const [liked, setLiked] = useState<boolean>(false);
  const [retweet, setRetweet] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  return (
    <>
      <UserContext.Provider
        value={{ liked, setLiked, retweet, setRetweet, comment, setComment }}>
        <MainUser />
      </UserContext.Provider>
    </>
  );
}
