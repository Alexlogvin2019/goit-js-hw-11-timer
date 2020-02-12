"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = Date.parse(targetDate);
    this.clock = document.querySelector(this.selector);
    this.clock = document.querySelector(this.selector);
    this.daysSpan = this.clock.querySelector('span[data-value="days"]');
    this.hoursSpan = this.clock.querySelector('span[data-value="hours"]');
    this.minutesSpan = this.clock.querySelector('span[data-value="mins"]');
    this.secondsSpan = this.clock.querySelector('span[data-value="secs"]');
    this.time = 0;
    this.timeiInt = 0;
  }
  getTimeRemaining() {
    const dateNow = Date.parse(new Date());
    this.time = this.targetDate - dateNow;
    const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((this.time % (1000 * 60)) / 1000);
    if (this.time <= 0) {
      clearInterval(this.timeiInt);
      console.log("STOP");
    }
    this.daysSpan.textContent = days;
    this.hoursSpan.textContent = hours;
    this.minutesSpan.textContent = mins;
    this.secondsSpan.textContent = secs;
  }
  
  startClock() {
    this.timeiInt = setInterval(this.getTimeRemaining.bind(this), 1000);

    }
}

const count = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Feb 13, 2020")
});

count.startClock();

// const dateNow = Date.parse(new Date());
// console.log(dateNow);

// const date = Date.parse(new Date('Feb 14, 2020'));
// console.log(date);
// const time = date - dateNow;
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// console.log(time);
// console.log(days);
