import { NextApiRequest, NextApiResponse } from "next";
import { HttpClientException } from "../../clients/http-client/exception";
import { HttpException } from "./http/HttpException";
import { Handler } from "../../../common";

export const ERROR_MAPPING = [
  {
    type: HttpException,
    map: (e: HttpException) => ({ httpStatus: e.httpStatus, code: e.code }),
  },
  {
    type: HttpClientException,
    map: () => ({ httpStatus: 400, code: "api-failed" }),
  },
];

export const createErrorMiddleware =
  (next: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await next(req, res);
    } catch (error: any) {
      global.console.log(error);
      global.console.log(
        JSON.stringify({
          scope: "error middleware",
          level: "warning",
          error: error?.toString(),
        })
      );

      let details = {
        httpStatus: 500,
        code: "unknown-api-error",
      };

      const errorMapper = ERROR_MAPPING.find(
        (mapping) => error instanceof mapping.type
      );
      if (errorMapper) {
        details = errorMapper.map(error);
      }

      return res.status(details.httpStatus).json({
        timestamp: Date.now(),
        ...details,
      });
    }
  };
