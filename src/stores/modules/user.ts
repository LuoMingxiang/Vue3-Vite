import { defineStore } from "pinia";

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref({
      info: {},
      token: "",
    });
    const setToken = (token: any) => {
      user.value.token = token;
    };
    return {
      user,
      setToken,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);
