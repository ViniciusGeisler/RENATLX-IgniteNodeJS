import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
    "/", 
    ensureAuthenticated, 
    ensureAdmin, 
    createCarController.handle
);

carsRoutes.get(
    "/available",
    listAvailableCarsController.handle
)

carsRoutes.post(
    "/specifications/:id", 
    ensureAuthenticated,
    ensureAdmin,
    createCarSpecificationController.handle
)

export { carsRoutes }