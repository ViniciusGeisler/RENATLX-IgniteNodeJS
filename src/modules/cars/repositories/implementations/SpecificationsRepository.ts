import { ICreateSpecificationDTO, ISpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/ISpecificationsRepository";
import { getRepository, Repository } from "typeorm";
import { Specification } from "../../infra/typeorm/entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
      this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
      const specification = this.repository.create({
        description,
        name
      })

      await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
          name,
        });

        return specification;
    }
}

export { SpecificationsRepository }