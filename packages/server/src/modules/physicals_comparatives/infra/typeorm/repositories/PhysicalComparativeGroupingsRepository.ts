import { getRepository, Repository } from 'typeorm';

import ICreatePhysicalComparativeGroupingDTO from '@modules/physicals_comparatives/dtos/ICreatePhysicalComparativeGroupingDTO';
import IPhysicalComparativeGroupingsRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeGroupingsRepository';

import PhysicalComparativeGrouping from '../entities/PhysicalComparativeGrouping';

class PhysicalComparativeGroupingsRepository
  implements IPhysicalComparativeGroupingsRepository {
  private ormRepository: Repository<PhysicalComparativeGrouping>;

  constructor() {
    this.ormRepository = getRepository(PhysicalComparativeGrouping);
  }

  public async create({
    header_id,
    title,
    duration,
    start_date,
    end_date,
  }: ICreatePhysicalComparativeGroupingDTO): Promise<
    PhysicalComparativeGrouping
  > {
    const physicalComparativeGrouping = this.ormRepository.create({
      header_id,
      title,
      duration,
      start_date,
      end_date,
    });

    await this.ormRepository.save(physicalComparativeGrouping);

    return physicalComparativeGrouping;
  }
}

export default PhysicalComparativeGroupingsRepository;
