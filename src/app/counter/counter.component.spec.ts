import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 when click plus button', () => {
    // given
    component.count = 0;
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    
    // when
    plusBtn.click();
    fixture.detectChanges();

    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: 1');
  });

  it('should minus 1 when click minus button', () => {
    // given
    component.count = 0;
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    
    // when
    minusBtn.click();
    fixture.detectChanges();

    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: -1');
  });
  
  it('should hide minus button when count number less than 0', () => {
    // given
    component.count = -1;
    
    // when
    fixture.detectChanges();

    // then
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]')
    expect(minusBtn).toBeFalsy();
  });
  
  it('should hide plus button when count number greater than 10', () => {
    // given
    component.count = 11;
    
    // when
    fixture.detectChanges();

    // then
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]')
    expect(plusBtn).toBeFalsy();
  });
  
  it('should return true when count not less than 0', () => {
    // given
    component.count = 1;
    
    // when
    expect(component.isGreaterOrEqualThanZero()).toBeTrue();
  });

  it('should return false when count less than 0', () => {
    // given
    component.count = -1;
    
    // when
    expect(component.isGreaterOrEqualThanZero()).toBeFalse();
  });

});
