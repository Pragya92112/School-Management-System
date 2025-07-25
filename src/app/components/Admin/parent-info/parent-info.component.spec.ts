import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInfoComponent } from './parent-info.component';

describe('ParentInfoComponent', () => {
  let component: ParentInfoComponent;
  let fixture: ComponentFixture<ParentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
