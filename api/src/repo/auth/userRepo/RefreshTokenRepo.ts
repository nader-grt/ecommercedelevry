// src/repo/auth/refreshTokenRepo.ts

import { RefreshToken } from "../../../models/main";


export  default class RefreshTokenRepo {
  async createToken(userId: number, token: string, expiresAt: Date) {
    return RefreshToken.create({ userId, token, revoked: false, expiresAt });
  }

  async findToken(token: string) {
    return RefreshToken.findOne({ where: { token } });
  }

  async revokeToken(token: string) {
    const record = await RefreshToken.findOne({ where: { token } });
    if (record) await record.update({ revoked: true });
  }

  async revokeAllUserTokens(userId: number) {
    await RefreshToken.update({ revoked: true }, { where: { userId } });
  }
}