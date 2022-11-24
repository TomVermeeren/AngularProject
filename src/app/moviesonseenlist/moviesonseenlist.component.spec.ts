import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesonseenlistComponent } from './moviesonseenlist.component';

describe('MoviesonseenlistComponent', () => {
  let component: MoviesonseenlistComponent;
  let fixture: ComponentFixture<MoviesonseenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesonseenlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesonseenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
