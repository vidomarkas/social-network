import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1aad0dd7-f7f1-4e0f-8bd9-92694924456b",
  },
});

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};

export const authAPI = {
  authenticate() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login({ login, password, rememberMe }) {
    return instance.post(`auth/login`, {
      email: login,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
