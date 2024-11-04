import moment from 'moment';

export const getDaysInMonth = (date) => date.daysInMonth();
export const getFirstDayOfMonth = (date) => date.clone().startOf('month').day();
export const formatDate = (date, format) => date.format(format);
export const isToday = (currentDate, date) => currentDate.isSame(date, 'day');
