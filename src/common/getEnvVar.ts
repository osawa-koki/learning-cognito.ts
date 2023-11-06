export class EnvVarNotFoundError extends Error {}

/**
 * 指定した環境変数を取得する。
 * @param name 環境変数名
 * @throws {EnvVarNotFoundError} 環境変数が定義されていない場合
 * @returns 環境変数の値
 */
export default function getEnvVar<T> (name: string): T {
  const value = process.env[name]
  if (value == null) {
    throw new EnvVarNotFoundError(`Environment variable ${name} is not defined.`)
  }
  return value as unknown as T
}
