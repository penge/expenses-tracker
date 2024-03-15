import dayjs from 'dayjs';
import { View } from './schema';

export default (timestamp: number, view: View): number => {
  if (view === 'monthly') {
    return dayjs(timestamp).month() + 1;
  }

  if (view === 'weekly') {
    return dayjs(timestamp).week();
  }

  return -1;
};
