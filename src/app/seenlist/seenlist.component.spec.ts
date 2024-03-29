import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenlistComponent } from './seenlist.component';

describe('SeenlistComponent', () => {
  let component: SeenlistComponent;
  let fixture: ComponentFixture<SeenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeenlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
