import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implamantations/DayJsDateProvider";
import { UsersTokensRepository } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepository;
let createUserUseCase: CreateUserUseCase;
let dateProvider: DayjsDateProvider;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepository();
    dateProvider = new DayjsDateProvider();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to authenticate a user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "user@test.com",
      name: "User test",
      password: "1234",
    }

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({ 
      email: user.email,
      password: user.password 
    })

    expect(result).toHaveProperty("token")
    
  });

  it("should not be able to authenticate an nonexistent user", async () => {
    await expect(authenticateUserUseCase.execute({ 
        email: "false@email.com",
        password: "1234" 
      })

    ).rejects.toEqual(new AppError("Email or password incorrect"))
  })

  it("should not be able to authenticate with incorrect password", async () => {

    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "user@test.com",
      name: "User test",
      password: "12345",
    }

    await createUserUseCase.execute(user);

    await expect( authenticateUserUseCase.execute({ 
        email: user.email,
        password: "incorrectPassword" 
      })

    ).rejects.toEqual(new AppError("Email or password incorrect"))
  })
})