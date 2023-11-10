import React, { createContext } from "react";

const UserContext = createContext();

export function Context({ children }) {
  const [user, setUser] = React.useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
