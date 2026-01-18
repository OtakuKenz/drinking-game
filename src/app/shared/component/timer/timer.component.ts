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

  resetState() {
    this.displayStart = true;
    this.displayStop = false;
    this.displayTime = false;
  }

  start() {
    // Reset and start
    this.displayTime = true;
    this.displayStart = false;
    this.stop();
    this.timer = this.duration;
    this.displayStop = true;

    this.intervalId = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.stop();
        this.finished.emit(); // notify parent
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.displayStop = false;
      this.finished.emit(); // notify parent
    }
  }
}
