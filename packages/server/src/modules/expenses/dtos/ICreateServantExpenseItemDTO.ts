export default interface ICreateServantExpenseItemDTO {
  spreadsheet_name: string;
  appropriation: {
    code: string;
    label: string;
  };
  month_value: number;
  accumulated: number;
}
