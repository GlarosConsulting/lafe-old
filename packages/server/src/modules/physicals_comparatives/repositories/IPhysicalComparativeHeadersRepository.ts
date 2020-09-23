import ICreatePhysicalComparativeHeaderDTO from '../dtos/ICreatePhysicalComparativeHeaderDTO';
import PhysicalComparativeHeader from '../infra/typeorm/entities/PhysicalComparativeHeader';

export default interface IPhysicalComparativeItemsRepository {
  create(
    data: ICreatePhysicalComparativeHeaderDTO,
  ): Promise<PhysicalComparativeHeader>;
}
