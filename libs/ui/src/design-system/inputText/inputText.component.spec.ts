import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextUIComponent } from './inputText.component';

describe('InputTextUIComponent', () => {
  let component: InputTextUIComponent;
  let fixture: ComponentFixture<InputTextUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextUIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
