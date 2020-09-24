export default interface ICreatePhysicalComparativeItemDTO {
  description: string;
  und: string;
  duration: number;
  start_date: Date;
  end_date: Date;
  percentage_weight: number;
  status_in_days: number;
  quantities: {
    planned: number;
    foreseen: number;
    measured: number;
  };
  percentage: {
    foreseen: number;
    measured: number;
  };
  advance_percentage: {
    foreseen: number;
    measured: number;
  };
}
