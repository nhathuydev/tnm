import {
  updateNewPost, updateHotPost, updateRefreshingPost,
} from '../redux/post/actions';
import { updateRefreshingBookmark, updateBookmark } from '../redux/bookmark/actions';
import { updateRefreshingUpvote, updateUpvote } from '../redux/upvote/actions';
import { updateUser } from '../redux/user/actions';
// import { LOGIN_TYPE } from '../constants';
// import store from '../configureStore';

// function listener() {
//   console.log('dddd');
//   token = store().getState();
// }
// store().subscribe(listener);


const METHOD = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};
const ENDPOINT = {
  POST_LIST: 'post',
  POST_CLAP: 'post/clap',
  POST_BOOKMARK: 'post/bookmark',
  GET_BOOKMARK_LIST: 'post',
  GET_UPVOTE_LIST: 'post',
  LOGIN: 'login/',
  // LOGIN: 'login/',
};
// const BASE_URL = 'http://192.168.80.109/api/';
const BASE_URL = 'http://192.168.1.107/api/';
// const BASE_URL = 'http://192.168.80.109/api/';

function fetchData(method, endpoint, payload) {
  // console.log(store().liftedStore.getState());
  // const headers = {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  //   // Authorization: ,
  // };
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (true) {
    headers.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNhODJiM2QxZGMzN2ZlN2NiYjQ5Y2EyYWI3YmEwN2MxZjgyYTUzYWI4Yzk0YmE1YzlkYTBmYmI1N2YzNTNkMTdiMzNiMDA4OGVjZDM3YTFlIn0.eyJhdWQiOiIxIiwianRpIjoiM2E4MmIzZDFkYzM3ZmU3Y2JiNDljYTJhYjdiYTA3YzFmODJhNTNhYjhjOTRiYTVjOWRhMGZiYjU3ZjM1M2QxN2IzM2IwMDg4ZWNkMzdhMWUiLCJpYXQiOjE1MTQyODI0NTMsIm5iZiI6MTUxNDI4MjQ1MywiZXhwIjoxNTQ1ODE4NDUzLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.h-ncSmkAVfqiedh2gdFyoGLnJOnXTaYebwwwjcc3CGxYo9VHTOndSOQcAgXkLZyWTfkGZYrDx3YWUZvUILf9un7xTN28RsLuAtX6ruvJdEoZAZQrVM5XAx9kXu1ycyqhJurPMP6R528YTZMBPD6wRgbQTNvr_r-xY7id3Vu8TFO7_KppgTGUmzazvaZiWxHdut1dhOVVD9ieP-P7OFjhn_AL810TqPxZHjrQybzbAnTSB2oJ_3_QKbcp7bSmUhU3Zn9-xL62pwoU4fUBMhfe9JN02msImVD_6X2-DHo-Pa75CgNwO3vlJIyRKaeLN6USpgT2IlOMc_Zw_wQ4E4DBve6T6ZGGO7rqadYW8cwve3sbiYiQvGytoezEt-0aty3v3PJjUa069iza2J4MdxzFgqQhjsjINer7TCW6MZePnjpNQpagP5PzIaZ7R7tY4e90dxc30q4D9msSPBDawlEJrEoQ32CEtioIb6E936hxh-r3MZwItjc6zt2fT4b9DAV0YHJAydATEO_SW-RBcW5NJ7sb-NLRhdod5SRPYyVa-RS9YgUoRlOQktSqgCub2C7qxmm3BeF7apRwozTH1RH0i4K0Y0uAg1rDmM2KCF180P1ZClcg0eQxfkv3_lc9nZuvrQ8jJxm0XbWhpfB9HM9s6w9NJOskyJKK9Zspr2YHmEU';
  }
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
export function getPost(page = 1, postType = 0) {
  const isFetchingNewPost = postType === 0;

  return dispatch => new Promise((resolve, reject) => {
    dispatch(updateRefreshingPost(true, isFetchingNewPost ? 'new' : 'hot'));
    return fetchData(METHOD.GET, ENDPOINT.POST_LIST, { params: { page, sort: isFetchingNewPost ? 'new' : 'hot' } })
      .then((data) => {
        dispatch(isFetchingNewPost ? updateNewPost(data.data) : updateHotPost(data.data));
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      })
      .done(() => {
        dispatch(updateRefreshingPost(false, isFetchingNewPost ? 'new' : 'hot'));
      });
  });
}

export function clapPost(id = 6, count = 1) {
  const params = {
    id, count,
  };
  return () => new Promise((resolve, reject) =>
    fetchData(METHOD.POST, ENDPOINT.POST_CLAP, { params })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      }));
}

export function bookmarkPost(id, attach = true) {
  const params = {
    id, attach: attach ? 1 : 0,
  };
  return () => new Promise((resolve, reject) =>
    fetchData(METHOD.POST, ENDPOINT.POST_BOOKMARK, { params })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      }));
}

export function getBookmark(page = 1) {
  return dispatch => new Promise((resolve, reject) => {
    dispatch(updateRefreshingBookmark(true));
    return fetchData(METHOD.GET, ENDPOINT.GET_BOOKMARK_LIST, { params: { page, filter: 'bookmark' } })
      .then((data) => {
        dispatch(updateBookmark(data.data));
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      })
      .done(() => {
        dispatch(updateRefreshingBookmark(false));
      });
  });
}

export function getUpvote(page = 1) {
  return dispatch => new Promise((resolve, reject) => {
    dispatch(updateRefreshingUpvote(true));
    return fetchData(METHOD.GET, ENDPOINT.GET_BOOKMARK_LIST, { params: { page, filter: 'like' } })
      .then((data) => {
        dispatch(updateUpvote(data.data));
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      })
      .done(() => {
        dispatch(updateRefreshingUpvote(false));
      });
  });
}

export function loginSocial(accessToken, type = 'facebook') {
  return dispatch => new Promise((resolve, reject) => fetchData(METHOD.GET, ENDPOINT.LOGIN + type, { params: { access_token: accessToken } })
    .then((data) => {
      dispatch(updateUser(data.data));
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    }));
}
export function getPosttttttttttttt() {
  return fetchData(METHOD.GET, ENDPOINT.POST);
}
