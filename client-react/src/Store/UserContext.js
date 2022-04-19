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
const getLocalUserType = () => {
  let userTypeLS = localStorage.getItem("userTypeLS");

  if (userTypeLS) {
    return JSON.parse(localStorage.getItem("userTypeLS"));
  } else {
    return null;
  }
};
const getLocalUserID = () => {
  let userIDLS = localStorage.getItem("userIDS");

  if (userIDLS) {
    return JSON.parse(localStorage.getItem("userIDS"));
  } else {
    return null;
  }
};

const getLocalUserData = () => {
  let userDataLS = localStorage.getItem("userData");

  if (userDataLS) {
    return JSON.parse(localStorage.getItem("userData"));
  } else {
    return null;
  }
};

const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(getLocalUser());
  //Cree un estado para setear el userType que por ahora se va a utilizar en el Register
  const [userType, setUserType] = useState(getLocalUserType());
  const [userID, setUserId] = useState(getLocalUserID());
  const [userData, setUserData] = useState(getLocalUserData());

  console.log(`USerType: ${userType}`);
  console.log(`User id: ${userID}`);

  //Creo un estado user dentro de mi localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(isUser));
  }, [isUser]);

  //Creo un estado userType dentro de mi localStorage
  useEffect(() => {
    localStorage.setItem("userTypeLS", JSON.stringify(userType));
  }, [userType]);

  //Creo un estado userID dentro de mi localStorage
  useEffect(() => {
    localStorage.setItem("userIDS", JSON.stringify(userID));
  }, [userID]);
  //Creo un estado userData dentro de mi localStorage
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider
      value={{
        isUser,
        setIsUser,
        userType,
        setUserType,
        userID,
        setUserId,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
