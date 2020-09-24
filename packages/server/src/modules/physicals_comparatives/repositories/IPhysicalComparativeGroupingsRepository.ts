import ICreatePhysicalComparativeGroupingDTO from '../dtos/ICreatePhysicalComparativeGroupingDTO';
import PhysicalComparativeGrouping from '../infra/typeorm/entities/PhysicalComparativeGrouping';

export default interface IPhysicalComparativeGroupingsRepository {
  create(
    data: ICreatePhysicalComparativeGroupingDTO,
  ): Promise<PhysicalComparativeGrouping>;
}
