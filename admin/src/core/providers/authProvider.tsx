const authProvider = {
  login: async ({ email, password }: any) => {
    const res = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

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

  getIdentity: () => {
    const token = localStorage.getItem("token");

    return token
      ? Promise.resolve({
          id: 1,
          fullName: "User Name",
        })
      : Promise.reject();
  },

  getPermissions: () => Promise.resolve(),
};

export default authProvider;