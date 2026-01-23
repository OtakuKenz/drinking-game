import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';
import { PlayerStorageService } from '../../services/playerStorage.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('PlayersAddComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let mockPlayerStorageService: jasmine.SpyObj<PlayerStorageService>;

  beforeEach(() => {
    mockPlayerStorageService = jasmine.createSpyObj('PlayerStorageService', ['load', 'save']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, PlayersComponent],
      providers: [
        { provide: PlayerStorageService, useValue: mockPlayerStorageService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
  });

  it('should load players from storage on init', () => {
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

  it('should emit addPlayer and save when form is valid', () => {
    mockPlayerStorageService.load.and.returnValue([]);
    component.ngOnInit();

    spyOn(component.addPlayer, 'emit');

    // set form value
    component.playersForm.get('playerName')?.setValue('Charlie');

    component.onAddPlayer();

    expect(component.addPlayer.emit).toHaveBeenCalledWith('Charlie');
    expect(mockPlayerStorageService.save).toHaveBeenCalledWith(component.players);
    expect(component.playersForm.get('playerName')?.value).toBeNull();
  });

  it('should not emit addPlayer if form is invalid', () => {
    spyOn(component.addPlayer, 'emit');

    component.playersForm.get('playerName')?.setValue(''); // empty value
    component.onAddPlayer();

    expect(component.addPlayer.emit).not.toHaveBeenCalled();
    expect(mockPlayerStorageService.save).not.toHaveBeenCalled();
  });

  it('should emit removePlayer with correct index', () => {
    spyOn(component.removePlayer, 'emit');

    component.onRemovePlayer(2);

    expect(component.removePlayer.emit).toHaveBeenCalledWith(2);
  });
});
