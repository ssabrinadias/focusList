import axios from 'axios';

import { API_URL } from '../data/config';
import { ITask } from '../interfaces/tasks';

export const getTasks = async (): Promise<ITask[]> => {
  try {
    const response = await axios.get<ITask[]>(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar as tarefas:', error);
    throw error;
  }
};
