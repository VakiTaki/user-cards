import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import fetchAllStudents from "../fakeApi/students";

const StudentsContext = React.createContext();

export const useStudents = () => {
  return useContext(StudentsContext);
};
const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  console.log(students);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getStudents();
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast.error(error);
      setError(null);
    }
  }, [error]);
  async function getStudents() {
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
    <StudentsContext.Provider value={{ students, getStudentById }}>
      {!isLoading ? children : <h1>Loading...</h1>}
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
