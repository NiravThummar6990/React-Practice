import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  // 1️⃣ Object state (form type)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  // 2️⃣ Array state (list type)
  const [users, setUsers] = useState([]);

  // 3️⃣ Update single input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 4️⃣ Add user
  const addUser = () => {
    setUsers((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", age: "" });
  };

  // 5️⃣ Delete user
  const deleteUser = (index) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  const value = {
    formData,
    users,
    handleChange,
    addUser,
    deleteUser
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);