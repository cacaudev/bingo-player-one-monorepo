import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BingoUiComponent } from './bingo-ui.component';

describe('BingoUiComponent', () => {
  let component: BingoUiComponent;
  let fixture: ComponentFixture<BingoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BingoUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BingoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
