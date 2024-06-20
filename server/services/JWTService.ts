import jwt from 'jsonwebtoken';
import type { SessionUser } from "~/types/globals/session";

export class JWTService {
  private accessTokenSecret: string;
  private refreshTokenSecret: string;
  private accessTokenExpiresIn: string | number;
  private refreshTokenExpiresIn: string | number;

  constructor(
	accessTokenSecret: string,
	refreshTokenSecret: string,
	accessTokenExpiresIn: string | number = '1h',
	refreshTokenExpiresIn: string | number = '7d'
  ) {
	this.accessTokenSecret = accessTokenSecret;
	this.refreshTokenSecret = refreshTokenSecret;
	this.accessTokenExpiresIn = accessTokenExpiresIn;
	this.refreshTokenExpiresIn = refreshTokenExpiresIn;
  }

  // Generate an access token
  async accessToken(payload: SessionUser, key: string) {
	return jwt.sign(payload, key, { expiresIn: this.accessTokenExpiresIn });
  }

  // Generate a refresh token
  async refreshToken(payload: SessionUser, key: string) {
	return jwt.sign(payload,
	  // this.refreshTokenSecret,
	  key,
	  { expiresIn: this.refreshTokenExpiresIn });
  }

  // Verify an access token
  verifyAccessToken(token: string): Object | null {
	try {
	  return jwt.verify(token, this.accessTokenSecret);
	} catch (error) {
	  console.error('Invalid access token:', error);
	  return null;
	}
  }

  // Verify a refresh token
  verifyRefreshToken(token: string): Object | null {
	try {
	  return jwt.verify(token, this.refreshTokenSecret);
	} catch (error) {
	  console.error('Invalid refresh token:', error);
	  return null;
	}
  }

  // Decode a token without verifying it
  decodeToken(token: string): null | { [key: string]: any } | string {
	return jwt.decode(token);
  }
}


