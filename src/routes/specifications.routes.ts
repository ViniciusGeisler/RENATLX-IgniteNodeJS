import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationCOntroller = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationCOntroller.handle);

export { specificationsRoutes };