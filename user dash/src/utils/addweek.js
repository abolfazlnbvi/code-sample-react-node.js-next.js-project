import moment from 'jalali-moment';


const jalaali = require('jalaali-js');
// روز هفته
export function getJalaaliWeekDay(jy, jm, jd) {
    const date = jalaali.toGregorian(jy, jm, jd);
    const gregorianDate = new Date(date.gy, date.gm - 1, date.gd);
    const weekDay = gregorianDate.getDay();
    const weekDays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
    return weekDays[weekDay];
}
export function getPersianDateDetails(jalaliDate) {
    const jDate = moment(jalaliDate, 'jYYYY/jMM/jDD').locale('fa');
    const monthName = jDate.format('jMMMM');
    const dayNumber = jDate.format('jDD');
    return `${dayNumber} ${monthName}`
}


// نزدیک ترین روز هفته
export function getNextDesiredWeekDay(jy, jm, jd, desiredWeekDay) {
    const date = jalaali.toGregorian(jy, jm, jd);
    const gregorianDate = new Date(date.gy, date.gm - 1, date.gd);
    const currentDayOfWeek = gregorianDate.getDay();
    const daysUntilDesired = (desiredWeekDay - currentDayOfWeek + 6) % 7;
    gregorianDate.setDate(gregorianDate.getDate() + daysUntilDesired);
    const jalaaliDate = jalaali.toJalaali(gregorianDate.getFullYear(), gregorianDate.getMonth() + 1, gregorianDate.getDate());
    return jalaaliDate;
}
const today = new Date();
export const jalaaliToday = jalaali.toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate());
export function getDayDifference(j2) {
    const date = new Date(j2)
    const date1 = jalaali.toGregorian(jalaaliToday.jy, jalaaliToday.jm, jalaaliToday.jd);
    const gregorianDate1 = new Date(date1.gy, date1.gm - 1, date1.gd);
    const date2 = jalaali.toGregorian(date.getFullYear(), date.getMonth() + 1, date.getDate());
    const gregorianDate2 = new Date(date2.gy, date2.gm - 1, date2.gd);
    const timeDifference = gregorianDate2.getTime() - gregorianDate1.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    console.log({ date, date1, gregorianDate1, date2, gregorianDate2, timeDifference, dayDifference });
    return dayDifference;
}





console.log(`امروز: ${jalaaliToday.jy}/${jalaaliToday.jm}/${jalaaliToday.jd}`);
console.log(`روز هفته: ${getJalaaliWeekDay(jalaaliToday.jy, jalaaliToday.jm, jalaaliToday.jd)}`);





const desiredWeekDay = 0; // 0: یکشنبه, 1: دوشنبه, ..., 6: شنبه
const nextDesiredDay = getNextDesiredWeekDay(jalaaliToday.jy, jalaaliToday.jm, jalaaliToday.jd, desiredWeekDay);
console.log(`نزدیک‌ترین روز دلخواه: ${nextDesiredDay.jy}/${nextDesiredDay.jm}/${nextDesiredDay.jd}`);
console.log(`روز هفته بعدی: ${getJalaaliWeekDay(nextDesiredDay.jy, nextDesiredDay.jm, nextDesiredDay.jd)}`);



// تبدیل میلی‌ثانیه به روز
console.log('اختلاف بین دو تاریخ به روز:', getDayDifference(
    jalaaliToday.jy,
    jalaaliToday.jm,
    jalaaliToday.jd,
    nextDesiredDay.jy,
    nextDesiredDay.jm,
    nextDesiredDay.jd

));

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

let length = 960; // طول مستطیل
let width = 635;  // عرض مستطیل

let sideLength = gcd(length, width);

console.log(`طول ضلع بزرگترین مربع: ${sideLength}`);