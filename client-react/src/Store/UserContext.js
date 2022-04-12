import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);
//Esta es la funcion que tengo que llamar en los componentes
//const { } = useUserContext()
export const useUserContext = () => {
  return useContext(UserContext);
};

//Creo una funcion para utilizar el localStorage y que no se pierda el logueo del user cada vez que se refresca el sitio

const getLocalUser = () => {
  let user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(getLocalUser());
  const [userType, setUsertype] = useState("");
  console.log(userType);
  //Creo un estado user dentro de mi localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(isUser));
  }, [isUser]);
  return (
    <UserContext.Provider value={{ isUser, setIsUser, setUsertype, userType }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
