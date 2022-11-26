import { NextApiRequest, NextApiResponse } from "next";
import { Handler, HttpResponseStatus } from "../../../common";
import { IController } from "./definitions";

export const createControllerMiddleware =
  (controller: IController) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const method: string = req.method as string;
    if (controller && controller[method]) {
      let handler: Handler = controller[method] as Handler;
      if (handler) {
        let data = await handler(req, res);
        return res.status(HttpResponseStatus.OK).json(data);
      }
    }
    return res.status(HttpResponseStatus.NOT_FOUND);
  };
