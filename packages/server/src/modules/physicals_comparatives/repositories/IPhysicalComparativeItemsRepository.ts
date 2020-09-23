import ICreatePhysicalComparativeItemDTO from '../dtos/ICreatePhysicalComparativeItemDTO';
import PhysicalComparativeItem from '../infra/typeorm/entities/PhysicalComparativeItem';

export default interface IPhysicalComparativeItemsRepository {
  createAll(
    data: ICreatePhysicalComparativeItemDTO[],
  ): Promise<PhysicalComparativeItem[]>;
}
