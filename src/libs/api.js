import { updatePost } from '../redux/post/actions';
import { updateUser } from '../redux/user/actions';
import { LOGIN_TYPE } from '../constants';

const METHOD = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};
const ENDPOINT = {
  POST_LIST: 'post',
  LOGIN: 'login/facebook?access_token=EAABtuBfgTWcBACqDseYtBQ6f2kOm3zUSpC6YiX2baSSOuI8ZBBUG8ZCF65CG97qZALBQkjxlUsVIffOkUYT5LNLfnTfk8Y0rqjVjhCFZAwtk2ZBJWhjsC9QgdO6CjTkxnevXv3JvZCcJx3EfvV69QibA6uP0ZC8XmKEwKHB1BZCjSKYmvJhGxirFpekE3YzTbSdd67qyBeWrSZCcA2tpZA2pu1RVT7ECOvS1oZD',
};
const BASE_URL = 'http://192.168.80.107/api/';

function fetchData(method, endpoint, payload) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: token,
  };
  const config = {
    method,
    headers,
  };
  let url = `${BASE_URL}${endpoint}`;
  if (payload && payload.params) {
    url += '?';
    for (const p in payload.params) {
      url += `${p}=${payload.params[p]}&`;
    }
    url = url.substring(0, url.length - 1);
  }
  console.log(`Request to: ${url}`);
  return new Promise((resolve, reject) => {
    fetch(url, config)
      .then(response => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(`Call api error: ${reject(error)}`);
        reject(error);
      });
  });
}
export function getPost(page = 1) {
  return dispatch => new Promise((resolve, reject) => {
    fetchData(METHOD.GET, ENDPOINT.POST_LIST, { params: { page, sort: 'new' } })
      .then((data) => {
        dispatch(updatePost(data.data));
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function loginSocial(accessToken, type = '') {
  return dispatch => new Promise((resolve, reject) => {
    fetchData(METHOD.GET, ENDPOINT.LOGIN + type, { access_token: accessToken }, { access_token: accessToken })
    .then((data) => {
      dispatch(updateUser(data));
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
  });
}
export function getPosttttttttttttt() {
  return fetchData(METHOD.GET, ENDPOINT.POST);
}
