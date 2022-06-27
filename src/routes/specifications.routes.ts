import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationCOntroller = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationCOntroller.handle);

export { specificationsRoutes };