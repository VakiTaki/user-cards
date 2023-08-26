import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import fetchAllStudents, { toggleFavorite } from "../fakeApi/students";
import Loader from "../components/loader";

const StudentsContext = React.createContext();

export const useStudents = () => {
  return useContext(StudentsContext);
};
const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorite')));
  // console.log(students);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getAllStudents();
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  const getFavorite = (id) => {
    setFavorite(toggleFavorite(id))
  }
  async function getAllStudents() {
    try {
      const content = await fetchAllStudents();
      setStudents(content);
      setIsLoading(false);
      return content;
    } catch (error) {
      errorCatcher(error);
    }
  }
  function getStudentById(id) {
    return students.find((u) => u.id === id);
  }
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }
  return (
    <StudentsContext.Provider value={{ students, getStudentById, favorite, getFavorite }}>
      <div className="relative">
        {children}
        {isLoading && <Loader />}
      </div>
    </StudentsContext.Provider>
  );
};

StudentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default StudentsProvider;