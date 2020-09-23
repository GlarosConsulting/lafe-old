import merge from 'lodash/merge';
import { v4 } from 'uuid';

import ICreatePhysicalComparativeHeaderDTO from '../../dtos/ICreatePhysicalComparativeHeaderDTO';
import PhysicalComparativeHeader from '../../infra/typeorm/entities/PhysicalComparativeHeader';
import IPhysicalComparativeHeadersRepository from '../IPhysicalComparativeHeadersRepository';

class FakePhysicalComparativeHeadersRepository
  implements IPhysicalComparativeHeadersRepository {
  private physicalComparativeHeaders: PhysicalComparativeHeader[] = [];

  public async create(
    data: ICreatePhysicalComparativeHeaderDTO,
  ): Promise<PhysicalComparativeHeader> {
    const physicalComparativeHeader = new PhysicalComparativeHeader();

    merge(physicalComparativeHeader, { id: v4() }, data);

    this.physicalComparativeHeaders.push(physicalComparativeHeader);

    return physicalComparativeHeader;
  }
}

export default FakePhysicalComparativeHeadersRepository;
