import merge from 'lodash/merge';
import { v4 } from 'uuid';

import ICreatePhysicalComparativeGroupingDTO from '../../dtos/ICreatePhysicalComparativeGroupingDTO';
import PhysicalComparativeGrouping from '../../infra/typeorm/entities/PhysicalComparativeGrouping';
import IPhysicalComparativeGroupingsRepository from '../IPhysicalComparativeGroupingsRepository';

class FakePhysicalComparativeGroupingsRepository
  implements IPhysicalComparativeGroupingsRepository {
  private physicalComparativeGroupings: PhysicalComparativeGrouping[] = [];

  public async create(
    data: ICreatePhysicalComparativeGroupingDTO,
  ): Promise<PhysicalComparativeGrouping> {
    const physicalComparativeGrouping = new PhysicalComparativeGrouping();

    merge(physicalComparativeGrouping, { id: v4() }, data);

    this.physicalComparativeGroupings.push(physicalComparativeGrouping);

    return physicalComparativeGrouping;
  }
}

export default FakePhysicalComparativeGroupingsRepository;
