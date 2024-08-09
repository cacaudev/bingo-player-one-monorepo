import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonUIComponent } from './button.component';

describe('ButtonUIComponent', () => {
  let component: ButtonUIComponent;
  let fixture: ComponentFixture<ButtonUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonUIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
