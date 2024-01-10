import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPageComponent } from './ai-page.component';

describe('AiPageComponent', () => {
  let component: AiPageComponent;
  let fixture: ComponentFixture<AiPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiPageComponent]
    });
    fixture = TestBed.createComponent(AiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
