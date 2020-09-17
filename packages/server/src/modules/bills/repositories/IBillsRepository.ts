import Bill from '../infra/typeorm/entities/Bill';

export default interface IBillsRepository {
  create(): Promise<Bill>;
}
