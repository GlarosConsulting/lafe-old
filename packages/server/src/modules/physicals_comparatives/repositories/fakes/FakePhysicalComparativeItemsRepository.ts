import merge from 'lodash/merge';
import { v4 } from 'uuid';

import ICreatePhysicalComparativeItemDTO from '../../dtos/ICreatePhysicalComparativeItemDTO';
import PhysicalComparativeItem from '../../infra/typeorm/entities/PhysicalComparativeItem';
import IPhysicalComparativeItemsRepository from '../IPhysicalComparativeItemsRepository';

class FakePhysicalComparativeItemsRepository
  implements IPhysicalComparativeItemsRepository {
  private physicalComparativeItems: PhysicalComparativeItem[] = [];

  public async createAll(
    data: ICreatePhysicalComparativeItemDTO[],
  ): Promise<PhysicalComparativeItem[]> {
    const createdPhysicalComparativeItems: PhysicalComparativeItem[] = [];

    for (const physicalComparativeData of data) {
      const physicalComparativeItem = new PhysicalComparativeItem();

      const {
        quantities,
        percentage,
        advance_percentage,
        ...rest
      } = physicalComparativeData;

      merge(
        physicalComparativeItem,
        { id: v4() },
        {
          ...rest,
          quantities: JSON.stringify(quantities),
          percentage: JSON.stringify(percentage),
          advance_percentage: JSON.stringify(advance_percentage),
        },
      );

      createdPhysicalComparativeItems.push(physicalComparativeItem);
    }

    this.physicalComparativeItems.push(...createdPhysicalComparativeItems);

    return createdPhysicalComparativeItems;
  }
}

export default FakePhysicalComparativeItemsRepository;
