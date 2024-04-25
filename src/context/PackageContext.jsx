import { createContext, useContext, useState } from "react";

const packageContext = createContext();
const PackageProvider = ({ children }) => {
  const [editPackage, setEditPackage] = useState(false);

  return (
    <packageContext.Provider value={{ editPackage, setEditPackage }}>
      {children}
    </packageContext.Provider>
  );
};

function usePackageContext() {
  const context = useContext(packageContext);
  if (context === undefined)
    throw new Error("Package Context was used outside the Form Provider");
  return context;
}
export { PackageProvider, usePackageContext };
