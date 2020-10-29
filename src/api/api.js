import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    // "API-KEY": "3d76116b-bf21-4eea-a0f0-3e4ba47122dd",
    "API-KEY": process.env.REACT_APP_SERVER_API_KEY,
  },
});

export const usersAPI = {
  async getUsers(pageSize = 10, currentPage = 1) {
    const response = await instance.get(
      `users?count=${pageSize}&page=${currentPage}`
    );
    return response.data;
  },
  async followUser(userId) {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },
  async unfollowUser(userId) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  async getProfile(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};

export const authAPI = {
  async authenticate() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
  login({ login, password, rememberMe }) {
    return instance.post(`auth/login`, {
      email: login,
      password,
      rememberMe,
    });
  },
  async logout() {
    const response = await instance.delete(`auth/login`);
    return response.data;
  },
};
