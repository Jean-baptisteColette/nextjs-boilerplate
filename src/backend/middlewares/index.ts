import { createControllerMiddleware, IController } from "./controller";
import { createErrorMiddleware } from "./error";

export const asController = (controller: IController) =>
  createErrorMiddleware(createControllerMiddleware(controller));
