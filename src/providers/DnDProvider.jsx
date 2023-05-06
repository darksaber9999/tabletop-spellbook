import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDnD } from "../fetch/fetchDnD";
import { useToastContext } from "./ToastProvider";

const DnDContext = createContext({});

const endpointFetchOptions = (title) => {
  return {
    pending: `Loading D&D ${title}...`,
    success: `D&D ${title} loaded!`,
    error: `D&D ${title} loading error!`,
  };
};

export const DnDProvider = ({ children }) => {
  const [loadingData, setLoadingData] = useState({});
  const [data, setData] = useState({});
  const { toastPromise } = useToastContext();

  const fetchDnDEndpoints = () =>
    toastPromise(
      fetchDnD("/api")
        .then((response) => response.json())
        .then((resolve) => setLoadingData(resolve)),
      endpointFetchOptions("endpoint data")
    );

  const fetchEndpointData = (endpoint, label) =>
    toastPromise(
      fetchDnD(endpoint)
        .then((response) => response.json())
        .then((resolve) =>
          setData((prevData) => ({ ...prevData, [`${label}Data`]: resolve }))
        ),
      endpointFetchOptions(label.charAt(0).toUpperCase() + label.slice(1))
    );

  const fetchDnDSpells = () => fetchEndpointData(loadingData.spells, "spells");

  useEffect(() => {
    fetchDnDEndpoints();
  }, []);

  return (
    <DnDContext.Provider
      value={{
        fetchDnDSpells,
        data,
      }}>
      {children}
    </DnDContext.Provider>
  );
};

export const useDnDContext = () => {
  const context = useContext(DnDContext);

  return {
    fetchDnDSpells: context.fetchDnDSpells,
    spellsData: context.data.spellsData,
  };
};
