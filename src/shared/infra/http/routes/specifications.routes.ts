import { Router } from "express";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";

const specificationsRoutes = Router();

const createSpecificationCOntroller = new CreateSpecificationController();

specificationsRoutes.post(
    "/",
    ensureAuthenticated, 
    ensureAdmin,
    createSpecificationCOntroller.handle
);

export { specificationsRoutes };