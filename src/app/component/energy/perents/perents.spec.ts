import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perents } from './perents';

describe('Perents', () => {
  let component: Perents;
  let fixture: ComponentFixture<Perents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
