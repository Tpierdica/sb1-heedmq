import { Clinic } from '../types/clinic';

export function isClinicOpen(clinic: Clinic): boolean {
  const now = new Date();
  const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentHours = clinic.hours[currentDay];

  if (!currentHours) return false;

  const [openTime, closeTime] = currentHours.split(' - ');
  const currentTime = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  });

  const parseTime = (timeStr: string) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    let hour = parseInt(hours);
    
    if (period === 'PM' && hour !== 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }
    
    return new Date().setHours(hour, parseInt(minutes || '0'), 0, 0);
  };

  const openTimeDate = parseTime(openTime);
  const closeTimeDate = parseTime(closeTime);
  const currentTimeDate = parseTime(currentTime);

  return currentTimeDate >= openTimeDate && currentTimeDate <= closeTimeDate;
}

export function getNextOpenTime(clinic: Clinic): string {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayIndex = now.getDay();

  // Check remaining hours of current day
  const currentDay = days[currentDayIndex];
  const currentHours = clinic.hours[currentDay];
  
  if (currentHours) {
    const [, closeTime] = currentHours.split(' - ');
    const closeTimeDate = new Date();
    const [closeHour, closePeriod] = closeTime.split(' ');
    let [hours, minutes] = closeHour.split(':');
    let hour = parseInt(hours);
    
    if (closePeriod === 'PM' && hour !== 12) {
      hour += 12;
    } else if (closePeriod === 'AM' && hour === 12) {
      hour = 0;
    }
    
    closeTimeDate.setHours(hour, parseInt(minutes || '0'), 0, 0);
    
    if (now < closeTimeDate) {
      return `Opens today at ${currentHours.split(' - ')[0]}`;
    }
  }

  // Check next 7 days
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (currentDayIndex + i) % 7;
    const nextDay = days[nextDayIndex];
    const nextDayHours = clinic.hours[nextDay];
    
    if (nextDayHours) {
      const openTime = nextDayHours.split(' - ')[0];
      return `Opens ${nextDay} at ${openTime}`;
    }
  }

  return 'Opening hours unavailable';
}