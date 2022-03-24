import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PactometroComponent } from './pactometro.component';

describe('PactometroComponent', () => {
  let component: PactometroComponent;
  let fixture: ComponentFixture<PactometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PactometroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PactometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
