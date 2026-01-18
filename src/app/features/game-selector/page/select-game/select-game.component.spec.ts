import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGameComponent } from './select-game.component';
import { Router } from '@angular/router';

describe('SelectGameComponent', () => {
  let component: SelectGameComponent;
  let fixture: ComponentFixture<SelectGameComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [SelectGameComponent],
      providers: [
        { provide: Router, useValue: router }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelectGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the selected game route', () => {
    component.gameSelected('/game/1');

    expect(router.navigate).toHaveBeenCalledWith(['/game/1']);
  });
});
