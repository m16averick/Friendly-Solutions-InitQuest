export type AssignedType = 
{
  person_name: string;
  status: string;
};

export type TaskType = {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: AssignedType[];
  status: string;
  priority: string;
};
