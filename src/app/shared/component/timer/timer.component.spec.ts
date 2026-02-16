import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    component.alarm = jasmine.createSpyObj('alarm', ['play', 'pause']);
    component.clockTicking = jasmine.createSpyObj('clockTicking', [
      'play',
      'pause',
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('start()', () => {
    it('should start the timer and countdown correctly', fakeAsync(() => {
      component.duration = 3; // 3 seconds for test
      let finishedCalled = false;
      component.finished.subscribe(() => (finishedCalled = true));

      component.start();
      expect(component.timer).toBe(3); // timer initialized

      tick(1000);
      expect(component.timer).toBe(2);

      tick(1000);
      expect(component.timer).toBe(1);

      tick(1000); // last tick
      expect(component.timer).toBe(0);
      expect(finishedCalled).toBeTrue(); // finished event emitted
    }));

    it('should call triggerTicking() and stop() when on start', () => {
      const triggerTicking = spyOn(component, 'triggerTicking');
      const stop = spyOn(component, 'stop');
      component.start();
      expect(triggerTicking).toHaveBeenCalled();
      expect(stop).toHaveBeenCalled();
    });

    it('should stop all ticking and alarm after timer ends', fakeAsync(() => {
      const triggerTicking = spyOn(component, 'triggerTicking');
      const stopTicking = spyOn(component, 'stopTicking');
      const stop = spyOn(component, 'stop');
      const triggerAlarm = spyOn(component, 'triggerAlarm');

      component.duration = 1;
      component.start();

      tick(1000); // let timer finish
      expect(triggerTicking).toHaveBeenCalled();
      component.finished.next(); // simulate timer finishing
      expect(stopTicking).toHaveBeenCalled();
      expect(triggerAlarm).toHaveBeenCalled();
      expect(stop).toHaveBeenCalledTimes(2);
    }));
  });

  describe('stop()', () => {
    beforeEach(() => {
      component.duration = 5;
      spyOn(component, 'stopTicking');
      spyOn(window, 'clearInterval');
    });
    it('should stop the timer', fakeAsync(() => {
      component.start();

      component.stop();
      expect(clearInterval).toHaveBeenCalled(); // interval cleared
    }));

    it('should call stopTicking()', () => {
      component.start();

      component.stop();
      expect(component.stopTicking).toHaveBeenCalled(); // stopTicking called when stopping timer
    });
  });

  it('should reset timer when start() is called again', fakeAsync(() => {
    component.duration = 4;
    component.start();
    tick(1000);
    expect(component.timer).toBe(3);

    component.start(); // restart timer
    expect(component.timer).toBe(4); // timer reset
  }));

  it('should reset state when resetState() is called', () => {
    component.displayStart = false;
    component.displayStop = true;
    component.displayTime = true;

    spyOn(component, 'triggerAlarmStop');
    component.resetState();

    expect(component.displayStart).toBeTrue();
    expect(component.displayStop).toBeFalse();
    expect(component.displayTime).toBeFalse();
    expect(component.triggerAlarmStop).toHaveBeenCalled();
  });

  it('should play ticking sound when triggerTicking() is called', () => {
    component.triggerTicking();
    expect(component.clockTicking.currentTime).toBe(0);
    expect(component.clockTicking.loop).toBeTrue();
    expect(component.clockTicking.play).toHaveBeenCalled();
  });

  it('should stop ticking sound when stopTicking() is called', () => {
    component.stopTicking();
    expect(component.clockTicking.pause).toHaveBeenCalled();
    expect(component.clockTicking.currentTime).toBe(0);
  });

  it('should play alarm sound when triggerAlarm() is called', () => {
    component.triggerAlarm();
    expect(component.alarm.play).toHaveBeenCalled();
  });

  it('should stop alarm sound when triggerAlarmStop() is called', () => {
    component.triggerAlarmStop();
    expect(component.alarm.pause).toHaveBeenCalled();
    expect(component.alarm.currentTime).toBe(0);
  });
});
