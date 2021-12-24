import { Router } from "express";

import { ResetPasswordUserController } from "@modules/account/useCases/resetPasswordUser/ResetPasswotdUserController";
import { SendForgotPasswordMailController } from "@modules/account/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);

export { passwordRoutes };