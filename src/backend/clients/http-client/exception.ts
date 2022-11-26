export class HttpClientException extends Error {
  constructor(
    message: string,
    public uri: string,
    public method: string,
    public responseCode: number,
    public responseBody: string
  ) {
    super(message);
  }
}
