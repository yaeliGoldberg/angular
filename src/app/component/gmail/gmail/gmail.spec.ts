import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gmail } from './gmail';

describe('Gmail', () => {
  let component: Gmail;
  let fixture: ComponentFixture<Gmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
