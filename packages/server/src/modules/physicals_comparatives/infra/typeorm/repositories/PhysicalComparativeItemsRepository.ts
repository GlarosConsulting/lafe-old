import { getRepository, Repository } from 'typeorm';

import ICreatePhysicalComparativeItemDTO from '@modules/physicals_comparatives/dtos/ICreatePhysicalComparativeItemDTO';
import IPhysicalComparativeItemsRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeItemsRepository';

import PhysicalComparativeItem from '../entities/PhysicalComparativeItem';

class PhysicalComparativeItemsRepository
  implements IPhysicalComparativeItemsRepository {
  private ormRepository: Repository<PhysicalComparativeItem>;

  constructor() {
    this.ormRepository = getRepository(PhysicalComparativeItem);
  }

  public async createAll(
    data: ICreatePhysicalComparativeItemDTO[],
  ): Promise<PhysicalComparativeItem[]> {
    const physicalComparativeItems = data.map(physicalComparativeData => {
      const {
        description,
        und,
        duration,
        start_date,
        end_date,
        percentage_weight,
        status_in_days,
        quantities,
        percentage,
        advance_percentage,
      } = physicalComparativeData;

      return this.ormRepository.create({
        description,
        und,
        duration,
        start_date,
        end_date,
        percentage_weight,
        status_in_days,
        quantities: JSON.stringify(quantities),
        percentage: JSON.stringify(percentage),
        advance_percentage: JSON.stringify(advance_percentage),
      });
    });

    await this.ormRepository.save(physicalComparativeItems);

    return physicalComparativeItems;
  }
}

export default PhysicalComparativeItemsRepository;
