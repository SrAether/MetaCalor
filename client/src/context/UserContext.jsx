import { createContext, useContext, useState } from "react";
import {
  createPlatillosRequest,
  getPlatillosRequest,
  getPlatillosPropiosRequest,
} from "../api/users";
import { KcalConsumRequest } from "../api/auth";

const UserContext = createContext();

export const useUserData = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UseUserData necesita ser usado con un UserProvider");
  }
  return context;
};

export function UserProvider({ children }) {
  const [users, setUser] = useState();

  const getKcal = async (user) => {
    try {
        console.log(user.id);
      const kcal = await KcalConsumRequest(user.id);
      console.log(kcal);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getAlimentos = async () => {
    try {
      const alimentos = await getAlimentosRequest();
      console.log(alimentos);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const getPlatillos = async () => {
    const platillos = await getPlatillosRequest();
    console.log(platillos);
  };

  const createPlatillo = async (alimentos) => {
    const res = await createPlatillosRequest(alimentos);
    console.log(alimentos);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        getPlatillos,
        createPlatillo,
        getKcal,
        getAlimentos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
