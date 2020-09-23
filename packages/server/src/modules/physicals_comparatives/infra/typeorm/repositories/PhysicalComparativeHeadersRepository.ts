import { getRepository, Repository } from 'typeorm';

import ICreatePhysicalComparativeHeaderDTO from '@modules/physicals_comparatives/dtos/ICreatePhysicalComparativeHeaderDTO';
import IPhysicalComparativeHeadersRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeHeadersRepository';

import PhysicalComparativeHeader from '../entities/PhysicalComparativeHeader';

class PhysicalComparativeHeadersRepository
  implements IPhysicalComparativeHeadersRepository {
  private ormRepository: Repository<PhysicalComparativeHeader>;

  constructor() {
    this.ormRepository = getRepository(PhysicalComparativeHeader);
  }

  public async create({
    spreadsheet_name,
    construction,
    constructive_unity,
    measurement,
    construction_start,
    construction_end,
  }: ICreatePhysicalComparativeHeaderDTO): Promise<PhysicalComparativeHeader> {
    const physicalComparativeHeader = this.ormRepository.create({
      spreadsheet_name,
      construction,
      constructive_unity,
      measurement,
      construction_start,
      construction_end,
    });

    await this.ormRepository.save(physicalComparativeHeader);

    return physicalComparativeHeader;
  }
}

export default PhysicalComparativeHeadersRepository;
