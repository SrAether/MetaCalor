import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  getProfileRequest,
  KcalConsumRequest,
} from "../api/auth";
import { getPlatillosRequest } from "../api/users.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No AuthContext");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  const userInformation = async () => {
    try {
      const res = await getProfileRequest();
      //console.log(res);
      setUser(res.data);
    } catch (error) {
      console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const getKcal = async (idExterna) => {
    try {
      const kcal = await getPlatillosRequest();
      console.log(kcal.data);

      // Obtener la fecha actual
      let fechaActual = new Date();
      fechaActual.setHours(0, 0, 0, 0); // Establecer la hora al inicio del día

      let elementosFiltrados = kcal.data.filter(
        (elemento) => elemento.usuarioId == idExterna
      );

      // Filtrar el arreglo para obtener elementos cuya fecha coincida con la fecha actual
      let elementosFiltradoS = elementosFiltrados.filter((elemento) => {
        let fechaElemento = new Date(elemento.fecha);
        fechaElemento.setHours(0, 0, 0, 0);
        return fechaElemento.getTime() === fechaActual.getTime();
      });

      let sumaEnergiaKcal = elementosFiltradoS.reduce(
        (suma, elemento) => suma + elemento.EnergiaKcal,
        0
      );

      console.log(sumaEnergiaKcal);
      user.sumaEnergiaKcal = sumaEnergiaKcal;
    } catch (error) {
      console.log(error.response.data);
      // if (Array.isArray(error.response.data)) {
      //   return setErrors(error.response.data);
      // }
      // setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    // cargamos la pagina
    async function checkLogin() {
      const cookies = Cookies.get();
      // verifica que tengamos un token
      if (!cookies.token) {
        // si no hay un token la autenticación esta en falso
        setIsAuthenticated(false);
        // no esta cargando
        setLoading(false);
        // el usuario esta en null
        return setUser(null);
      }
      try {
        // si hay un token, verificamos el token
        const res = await verifyTokenRequest(cookies.token);
        //console.log(res);
        // no responde un dato
        if (!res.data) {
          // no esta autenticado
          setIsAuthenticated(false);
          // no esta cargando
          setLoading(false);
          //retorna
          return;
        }
        // si hay dato implica que el token es valido, colocamos authenticated en true
        setIsAuthenticated(true);
        // le damos los datos del usuario
        setUser(res.data);
        // termino de cargar
        setLoading(false);
      } catch (error) {
        // monstramos el error
        console.log(error);
        // no esta autenticado
        setIsAuthenticated(false);
        // no hay usuario
        setUser(null);
        // no esta cargando
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated,
        userInformation,
        errors,
        getKcal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
