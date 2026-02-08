
  import cors, { CorsOptions } from "cors";


  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
  ];

 export const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      // السماح لـ Postman / curl
      if (!origin) return callback(null, true);
  
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS: Origin not allowed"));
      }
    },
  
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ],
    credentials: true
  };
    