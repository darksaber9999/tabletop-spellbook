const API_URL = "https://www.dnd5eapi.co";

export const fetchDnD = (endpoint) => {
  return fetch(`${API_URL}${endpoint}`, {
    method: "GET",
    redirect: "follow",
  });
};
