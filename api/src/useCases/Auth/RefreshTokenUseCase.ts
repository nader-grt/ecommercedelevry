
import jwt from "jsonwebtoken";
import generateAccessToken from "../../middleware/generateAccessToken";
import { generateRefreshToken } from "../../middleware/generateRefreshToken";


export default class RefreshTokenUseCase {
  async execute(refreshToken: string) {
    try {
      const payload: any = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);

      const newAccessToken = await generateAccessToken(payload.email, payload.role, payload.id);
      const newRefreshToken = await generateRefreshToken(payload.email, payload.role, payload.id);

      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (err) {
      throw new Error("Invalid or expired refresh token");
    }
  }
}
