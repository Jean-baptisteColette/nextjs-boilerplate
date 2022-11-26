import { Handler } from "../../../common";

export interface IController {
  [index: string]: Handler;
}
