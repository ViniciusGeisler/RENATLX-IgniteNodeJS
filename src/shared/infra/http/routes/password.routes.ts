import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordEmail/SendForgotPasswordMailController";
import { Router } from "express";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle)

export { passwordRoutes }