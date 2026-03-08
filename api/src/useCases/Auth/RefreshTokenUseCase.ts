
import jwt from "jsonwebtoken";
import generateAccessToken from "../../middleware/generateAccessToken";
import { generateRefreshToken } from "../../middleware/generateRefreshToken";
import RefreshTokenRepo from "../../repo/auth/userRepo/RefreshTokenRepo";


export default class RefreshTokenUseCase {
  private _refreshTokenRepo = new RefreshTokenRepo();
  async execute(refreshToken: string) {
    try {

      const tokenRecord = await this._refreshTokenRepo.findToken(refreshToken);
      if (!tokenRecord) throw new Error("Invalid refresh token");
  
      if (tokenRecord.revoked || tokenRecord.expiresAt < new Date()) {
        throw new Error("Refresh token expired or revoked");
      }
  
      // Decode old token payload
     
      const payload: any = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);

      const newAccessToken = await generateAccessToken(payload.email, payload.role, payload.id);
      const newRefreshToken = await generateRefreshToken(payload.email, payload.role, payload.id);


      await this._refreshTokenRepo.revokeToken(refreshToken);
      await this._refreshTokenRepo.createToken(
        payload.id,
        refreshToken,
        new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      );
      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (err) {
      throw new Error("Invalid or expired refresh token");
    }
  }
}
