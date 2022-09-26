import { container } from "tsyringe";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/cars/infra/typeorm/repositories/ICategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/SpecificationsRepository";
import { ISpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/ISpecificationsRepository";
import { CategoriesRepository } from "@modules/cars/repositories/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)