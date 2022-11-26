import { HttpClientInterface } from "./types";
import { HttpClientException } from "./exception";

export default class FetchClient implements HttpClientInterface {
  delete<T>(uri: string): Promise<T> {
    return FetchClient.makeRequest(uri, false, {
      method: "DELETE",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  get<T>(uri: string): Promise<T> {
    return FetchClient.makeRequest(uri, true, { method: "GET" });
  }

  patch<T>(uri: string, data: object): Promise<T> {
    return FetchClient.makeRequest(uri, true, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/merge-patch+json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  }

  post<T>(uri: string, data: object): Promise<T> {
    return FetchClient.makeRequest(uri, true, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data),
    });
  }

  put<T>(uri: string, data: object): Promise<T> {
    return FetchClient.makeRequest(uri, true, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data),
    });
  }

  private static async makeRequest(
    uri: string,
    expectResponse: boolean,
    options?: RequestInit
  ) {
    const response = await fetch(uri, options);
    if (!response.ok) {
      throw new HttpClientException(
        `Failed HTTP Request ${uri} ${JSON.stringify(options)}`,
        uri,
        options?.method ?? "GET",
        response.status,
        await response.text()
      );
    }

    if (expectResponse) {
      return response.json();
    }
  }
}
