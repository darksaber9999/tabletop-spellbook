import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDnD } from "../fetch/fetchDnD";
import { useToastContext } from "./ToastProvider";

const DnDContext = createContext({});

export const DnDProvider = ({ children }) => {
  const [loadingData, setLoadingData] = useState({});
  const [data, setData] = useState({});
  const { toastPromise } = useToastContext();

  const fetchDnDEndpoints = () =>
    toastPromise(fetchDnD("/api"))
      .then((response) => response.json())
      .then((resolve) => setLoadingData(resolve));

  const fetchEndpointData = (endpoint, label) =>
    toastPromise(fetchDnD(endpoint))
      .then((response) => response.json())
      .then((resolve) =>
        setData((prevData) => ({ ...prevData, [`${label}Data`]: resolve }))
      );

  const fetchDnDSpells = () => fetchEndpointData(loadingData.spells, "spells");

  useEffect(() => {
    fetchDnDEndpoints();
  }, []);

  return (
    <DnDContext.Provider
      value={{
        fetchDnDSpells,
      }}>
      {children}
    </DnDContext.Provider>
  );
};

export const useDnDContext = () => {
  const context = useContext(DnDContext);

  return {
    fetchDnDSpells: context.fetchDnDSpells,
  };
};
