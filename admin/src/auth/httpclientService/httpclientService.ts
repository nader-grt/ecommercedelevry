// // src/auth/httpclient/httpClient.ts
// import authProvider from "../../core/providers/authProvider";

// export async function httpclientService(
//   url: string,
//   options: RequestInit = {}
// ): Promise<{ json: any }> {
//   const opts: RequestInit = {
//     ...options,
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//       ...(options.headers || {}),
//       ...(authProvider.getAccessToken()
//         ? { Authorization: `Bearer ${authProvider.getAccessToken()}` }
//         : {}),
//     },
//   };

//   try {
//     let res = await fetch(url, opts);
//     let data = await res.json(); // 

//     if (res.status === 401) {
//       const refreshRes = await fetch("/api/refresh-token", {
//         method: "POST",
//         credentials: "include",
//       });

//       if (!refreshRes.ok) {
//         throw new Error("Session expired, login again");
//       }

//       const refreshData = await refreshRes.json();
//       authProvider.updateAccessToken(refreshData.accessToken);

//       const retryOpts: RequestInit = {
//         ...opts,
//         headers: {
//           ...opts.headers,
//           Authorization: `Bearer ${refreshData.accessToken}`,
//         },
//       };

//       res = await fetch(url, retryOpts);
//       data = await res.json(); //

//       if (!res.ok) {
//         throw new Error(data.message || "Request failed after refresh");
//       }

//       return { json: data };
//     }

//     if (!res.ok) {
//       throw new Error(data.message || "Request failed");
//     }

//     console.log("ddddddddddd  ",data)

//     return { json: data };
//   } catch (err) {
//     throw err;
//   }
// }


import authProvider from "../../core/providers/authProvider";

export async function httpclientService(
  url: string,
  options: RequestInit = {}
): Promise<{ json: any }> {
  
  // Helper to build headers dynamically
  const getOptions = (token?: string | null): RequestInit => ({
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      ...(token || authProvider.getAccessToken()
        ? { Authorization: `Bearer ${token || authProvider.getAccessToken()}` }
        : {}),
    },
  });

  try {
    let res = await fetch(url, getOptions());

    // 1. Handle Token Refresh if 401
    if (res.status === 401) {
      const refreshRes = await fetch("/api/refresh-token", {
        method: "POST",
        credentials: "include",
      });

      if (!refreshRes.ok) {
        throw new Error("Session expired, login again");
      }

      const refreshData = await refreshRes.json();
      authProvider.updateAccessToken(refreshData.accessToken);

      // 2. Retry original request with the NEW token
      res = await fetch(url, getOptions(refreshData.accessToken));
    }

    // 3. Parse JSON only once at the very end
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Request failed");
    }

    return { json: data };
  } catch (err) {
    console.error("HTTP Client Error:", err);
    throw err;
  }
}