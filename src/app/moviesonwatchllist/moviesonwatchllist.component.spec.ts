import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesonwatchllistComponent } from './moviesonwatchllist.component';

describe('MoviesonwatchllistComponent', () => {
  let component: MoviesonwatchllistComponent;
  let fixture: ComponentFixture<MoviesonwatchllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesonwatchllistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesonwatchllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
