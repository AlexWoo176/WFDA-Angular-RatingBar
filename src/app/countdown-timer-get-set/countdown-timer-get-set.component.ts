import {Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-get-set',
  templateUrl: './countdown-timer-get-set.component.html',
  styleUrls: ['./countdown-timer-get-set.component.scss']
})
export class CountdownTimerGetSetComponent implements OnInit, OnDestroy {
  constructor() {
  }

  private interValid = 0;
  message = '';
  remainingTime: number;
  // tslint:disable-next-line:variable-name
  private _seconds = 11;
  @Input()
  get seconds(): number {
    return this._seconds;
  }

  set seconds(seconds) {
    // tslint:disable-next-line:triple-equals
    seconds = typeof seconds == 'undefined' ? 11 : seconds;
    const secondsFixed = Number(seconds);
    this._seconds = Number.isNaN(secondsFixed) ? 11 : secondsFixed;
  }

  ngOnDestroy(): void {
    this.clearTime();
  }

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  clearTime(): void {
    clearInterval(this.interValid);
  }

  start(): void {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;

    }
  }

  stop(): void {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset(): void {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  countDown(): void {
    this.clearTime();
    this.interValid = window.setInterval(() => {
      this.remainingTime -= 1;
      // tslint:disable-next-line:triple-equals
      if (this.remainingTime == 0) {
        this.message = 'Blast off!';
        this.clearTime();
        this.start();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }

}
