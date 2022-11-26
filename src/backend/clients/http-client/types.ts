export interface HttpClientInterface {
  get<T>(uri: string): Promise<T>;

  post<T>(uri: string, data: object): Promise<T>;

  delete<T>(uri: string): Promise<T>;

  put<T>(uri: string, data: object): Promise<T>;

  patch<T>(uri: string, data: object): Promise<T>;
}
