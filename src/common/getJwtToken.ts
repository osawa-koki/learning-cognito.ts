import { type Request } from 'express'

/**
 * リクエストからJWTトークンを取得する。
 * @param req リクエスト
 * @returns JWTトークン
 */
export default function getJwtToken (req: Request): string | null {
  return req.headers.authorization?.split(' ')[1] ?? null
}
