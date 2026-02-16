import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-timer',
  imports: [MatButtonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  @Input() duration: number = 5;        // default timer duration in seconds
  @Input() startTimerLabel: string = "Start timer!";
  @Input() stopTimerLabel: string = "Stop timer!";
  @Output() finished = new EventEmitter<void>(); // emits when timer ends
  timer: number = 0;
  displayStart = true;
  displayStop = false;
  displayTime = false;
  private intervalId: any;

  alarm = new Audio('alarm.wav');
  clockTicking = new Audio('clock-ticking.mp3');

  resetState() {
    this.displayStart = true;
    this.displayStop = false;
    this.displayTime = false;
    this.triggerAlarmStop();
  }

  start() {
    // Reset and start
    this.stop();
    this.triggerTicking();
    this.displayTime = true;
    this.displayStart = false;
    this.timer = this.duration;
    this.displayStop = true;

    this.intervalId = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.stop();
        this.stopTicking();
        this.triggerAlarm();
        this.finished.emit(); // notify parent
      }
    }, 1000);
  }

  triggerTicking(){
    this.clockTicking.currentTime = 0;
    this.clockTicking.loop = true;
    this.clockTicking.play();
  }

  stopTicking(){
    this.clockTicking.pause();
    this.clockTicking.currentTime = 0;
  }

  triggerAlarm() {
    this.alarm.currentTime = 0;
    this.alarm.play();
  }

  triggerAlarmStop() {
    this.alarm.pause();
    this.alarm.currentTime = 0;
  }

  stop() {
    this.stopTicking();
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.displayStop = false;
      this.finished.emit(); // notify parent
    }
  }
}
