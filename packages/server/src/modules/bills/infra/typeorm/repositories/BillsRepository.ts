import { getRepository, Repository } from 'typeorm';

import ICreateBillDTO from '@modules/bills/dtos/ICreateBillDTO';
import IBillsRepository from '@modules/bills/repositories/IBillsRepository';

import Bill from '../entities/Bill';

class BillsRepository implements IBillsRepository {
  private ormRepository: Repository<Bill>;

  constructor() {
    this.ormRepository = getRepository(Bill);
  }

  public async createAll(data: ICreateBillDTO[]): Promise<Bill[]> {
    const bills = data.map(billData => {
      const {
        spreadsheet_name,
        category,
        spreadsheet_code,
        fiscal_document,
        service_description,
        provider,
        competence_date,
        payment_date,
        value,
      } = billData;

      return this.ormRepository.create({
        spreadsheet_name,
        category,
        spreadsheet_code,
        fiscal_document,
        service_description,
        provider,
        competence_date,
        payment_date,
        value,
      });
    });

    await this.ormRepository.save(bills);

    return bills;
  }
}

export default BillsRepository;
