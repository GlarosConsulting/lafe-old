export default interface ICreateBillDTO {
  spreadsheet_name: string;
  category: string;
  spreadsheet_code: string;
  fiscal_document: string;
  service_description: string;
  provider: string;
  competence_date?: Date;
  payment_date: Date;
  value: number;
}
