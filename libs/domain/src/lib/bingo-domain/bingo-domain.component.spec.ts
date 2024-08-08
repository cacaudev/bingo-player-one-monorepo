import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BingoDomainComponent } from './bingo-domain.component';

describe('BingoDomainComponent', () => {
  let component: BingoDomainComponent;
  let fixture: ComponentFixture<BingoDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BingoDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BingoDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
