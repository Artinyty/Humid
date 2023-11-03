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
    return instance.get(`profile/` + userId);
  }

}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}









