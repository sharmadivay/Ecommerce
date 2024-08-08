import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keyword: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

// export default { useAuth, AuthProvider };
