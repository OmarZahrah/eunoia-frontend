import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider
      value={{ avatar, setAvatar, email, setEmail, name, setName }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the Form Provider");
  return context;
}
export { UserProvider, useUserContext };
