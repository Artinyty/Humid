import axios from "axios"


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3a233b8f-656a-4c73-b1cf-0a99556b92d4'
  }
});


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(usreId) {
    return instance.post(`follow/${usreId}`)
  },
  unfollow(usreId) {
    return instance.delete(`follow/${usreId}`)
  },
  getProfile(userId) {
    console.warn('Obsoled method. Please use profileAPI Object')
    return profileAPI.getProfile(userId);
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`/profile/status/`, { status: status });
  }


}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  }

}









