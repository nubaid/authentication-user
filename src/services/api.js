import axios from "axios";

// repository.. wrappers for sending rest requests

// actual call using axios
// get the authentication token from local storage if it exists
const token = localStorage.getItem("access_token");
// get wrapper
export const getFromURL = async (url, headers = {}, options = {}) => {
  if (url) {
    return await axios({
      method: "GET",
      url,
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      },
      ...options
    });
  }
  return new Error("url is empty.");
};

export const deleteFromURL = async (url, options = {}) => {
  if (url) {
    return await axios({ method: "DELETE", url, ...options });
  }
  return new Error("url is empty.");
};

// post wrapper
export const postToURL = async (url, data, options = {}) => {
  return await axios({ method: "POST", url, data, ...options });
};

export const putToURL = async (url, data, options = {}) => {
  return await axios({ method: "PUT", url, data, ...options });
};
export const patchToURL = async (url, data, options = {}) => {
  return await axios({ method: "PATCH", url, data, ...options });
};
