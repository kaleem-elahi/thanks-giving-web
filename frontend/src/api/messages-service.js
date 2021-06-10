import axios from "axios";

const get = (url, params, headers) =>
  new Promise((resolve) => {
    axios
      .get(url, { params, headers })
      .then((response) => resolve(response))
      .catch((error) => resolve(error.response));
  });

const post = (url, body, headers) =>
  // new Promise((resolve) => {
    axios
      .post(url, body, {
        headers,
      })
      .then((response) =>  response)
      .catch((error) =>  error.response);
  // });

const update = (url, body, headers) =>
  new Promise((resolve) => {
    axios
      .put(url, body, {
        headers,
      })
      .then((response) => resolve(response))
      .catch((error) => resolve(error.response));
  });

const deleteCall = (url, headers) =>
  new Promise((resolve) => {
    axios
      .delete(url, {
        headers,
      })
      .then((response) => resolve(response))
      .catch((error) => resolve(error.response));
  });


export default {
  get,
  post,
  update,
  deleteCall,
}  