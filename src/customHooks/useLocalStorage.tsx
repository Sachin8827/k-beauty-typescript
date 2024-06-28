import { useState } from "react";
import { User } from "../Types/Types";

function useLocalStorage(key: string) {
  const [data, setData] = useState(() => {
    const storedUsers = localStorage.getItem(key);
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const set = (user: User) => {
    setData([...data, user]);
    localStorage.setItem(key, JSON.stringify(data));

  }
  const get = () => {
    return data;
  }
  return { set, get }
}

export default useLocalStorage;
