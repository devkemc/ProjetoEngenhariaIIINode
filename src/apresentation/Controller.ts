import { Request, Response } from "express";
import { MethodRequestTypes } from "./MethodRequestTypes";

export class Controller {
  async handle(request: Request, response: Response) {
    if (request.method == MethodRequestTypes.GET) {
    }
  }
}
