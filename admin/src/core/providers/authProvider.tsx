

let accessToken: string | null = null;
const authProvider = {
  login: async ({ email, password }: { email: string; password: string }) => {
    
    const res = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      credentials: "include", //   
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Login failed");
    }

    const data = await res.json();
    authProvider.updateAccessToken(data.accessToken); // 
    return data;
  },
 
  updateAccessToken: (token: string) => {
    accessToken = token;
  },

 
  getAccessToken: (): string | null => {
    return accessToken;
  },


  // logout:async () => {
  //   const res = await fetch("http://localhost:4000/api/logout", {
  //     credentials: "include",
  //   });
  //   return Promise.resolve();
  // },

  checkAuth: async () => {
    const res = await fetch("http://localhost:4000/api/me", {
      credentials: "include",
    });
  
    if (res.status === 401) {
      return Promise.reject();
    }
  
    return Promise.resolve();
  },
  checkError: (error: any) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },



  getPermissions: () => Promise.resolve(),
};

export default authProvider;