import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../services/getTasks';

const TASKS_QUERY_KEY = 'tasks';

export const useTasks = () => {
  return useQuery({ queryKey: [TASKS_QUERY_KEY], queryFn: getTasks })
};