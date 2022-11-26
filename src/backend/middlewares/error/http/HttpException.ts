export class HttpException extends Error {
  constructor(message: string, public httpStatus: number, public code: string) {
    super(message);
  }
}
