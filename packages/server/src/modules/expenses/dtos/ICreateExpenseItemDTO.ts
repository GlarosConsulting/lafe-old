export default interface ICreateExpenseItemDTO {
  spreadsheet_name: string;
  collaborator: string;
  role: string;
  value: number;
  percentage: number;
  appropriation: {
    code: string;
    label: string;
  };
}
