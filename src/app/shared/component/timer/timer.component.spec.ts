import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => {
    spyOn(window.HTMLMediaElement.prototype, 'play')
      .and.returnValue(Promise.resolve());
    spyOn(window.HTMLMediaElement.prototype, 'pause')
      .and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start the timer and countdown correctly', fakeAsync(() => {
    component.duration = 3; // 3 seconds for test
    let finishedCalled = false;
    component.finished.subscribe(() => finishedCalled = true);

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

  it('should stop the timer', fakeAsync(() => {
    component.duration = 5;
    spyOn(window, 'clearInterval'); // spy on global clearInterval
    component.start();

    component.stop();
    expect(clearInterval).toHaveBeenCalled(); // interval cleared
  }));

  it('should reset timer when start() is called again', fakeAsync(() => {
    component.duration = 4;
    component.start();
    tick(1000);
    expect(component.timer).toBe(3);

    component.start(); // restart timer
    expect(component.timer).toBe(4); // timer reset
  }));

  it('should reset state when resetState() is called', (() => {
    component.displayStart = false;
    component.displayStop = true;
    component.displayTime = true;

    component.resetState();
    expect(component.displayStart).toBeTrue();
    expect(component.displayStop).toBeFalse();
    expect(component.displayTime).toBeFalse();
  }));
});
