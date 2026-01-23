import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { PlayerStorageService } from '../../services/playerStorage.service';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let mockPlayerStorageService: jasmine.SpyObj<PlayerStorageService>;

  beforeEach(() => {
    mockPlayerStorageService = jasmine.createSpyObj('PlayerStorageService', ['load', 'save']);

    TestBed.configureTestingModule({
      imports: [MainPageComponent],
      providers: [
        { provide: PlayerStorageService, useValue: mockPlayerStorageService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
  });

  it('should load players on init', () => {
    mockPlayerStorageService.load.and.returnValue(['Alice', 'Bob']);

    component.ngOnInit();

    expect(component.players).toEqual(['Alice', 'Bob']);
    expect(mockPlayerStorageService.load).toHaveBeenCalled();
  });

  it('should initialize empty array if no players saved', () => {
    mockPlayerStorageService.load.and.returnValue(null);

    component.ngOnInit();

    expect(component.players).toEqual([]);
  });

  it('should add a player and save', () => {
    mockPlayerStorageService.load.and.returnValue([]);
    component.ngOnInit();

    component.onAddPlayer('Charlie');

    expect(component.players).toContain('Charlie');
    expect(mockPlayerStorageService.save).toHaveBeenCalledWith(component.players);
  });

  it('should remove a player and save', () => {
    mockPlayerStorageService.load.and.returnValue(['Alice', 'Bob', 'Charlie']);
    component.ngOnInit();

    component.onRemovePlayer(1); // remove 'Bob'

    expect(component.players).toEqual(['Alice', 'Charlie']);
    expect(mockPlayerStorageService.save).toHaveBeenCalledWith(component.players);
  });

  it('should call savePlayers on add and remove', () => {
    mockPlayerStorageService.load.and.returnValue([]);
    component.ngOnInit();

    spyOn(component as any, 'savePlayers'); // spy on private method

    component.onAddPlayer('Dave');
    expect((component as any).savePlayers).toHaveBeenCalled();

    component.onRemovePlayer(0);
    expect((component as any).savePlayers).toHaveBeenCalledTimes(2);
  });
});
