
let myDate = new Date();
console.log(myDate);                 // 2024-12-31T20:47:35.763Z
console.log(myDate.toString());      // Wed Jan 01 2025 02:17:35 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // Wed Jan 01 2025
console.log(myDate.toTimeString());  // 02:17:35 GMT+0530 (India Standard Time)
console.log(myDate.getDate());       // 1
console.log(myDate.toLocaleDateString());  // 1/1/2025
console.log(myDate.toLocaleString())
myDate.toLocaleString('default', {
    weekday: "long",
    
});

let now = new Date();
console.log(now.getFullYear()); // Year
console.log(now.getMonth()); // Month (0-11)
console.log(now.getDate()); // Day of the month (1-31)
console.log(now.getDay()); // Day of the week (0=Sunday, 6=Saturday)
console.log(now.getHours()); // Hour (0-23)
console.log(now.getMinutes()); // Minutes (0-59)
console.log(now.getSeconds()); // Seconds (0-59)
console.log(now.getMilliseconds()); // Milliseconds (0-999)
console.log(now.getTime()); // Timestamp

let customDate = new Date(2024, 11, 20, 12, 30, 0);  // (year, month, day, hours, minutes, seconds, milliseconds)
console.log(customDate);
console.log(customDate.toDateString());
console.log(customDate.toLocaleString());

let myCreatedDate = new Date("12-20-2001")
console.log(myCreatedDate.toLocaleString());


let timestamp = Date.now();
console.log(timestamp); // Milliseconds

let future = new Date();
future.setDate(future.getDate() + 7); // Add 7 days
console.log(future.toLocaleDateString());

let past = new Date();
past.setFullYear(past.getFullYear() - 1); // Subtract 1 year
console.log(past.toLocaleDateString());

let date1 = new Date(2024, 11, 25);
let date2 = new Date(2024, 11, 30);

console.log(date1 > date2); // false
console.log(date1 < date2); // true
console.log(date1.getTime() === date2.getTime()); // false

console.log(Math.floor(Date.now()/1000)); // Current Time in Sec
