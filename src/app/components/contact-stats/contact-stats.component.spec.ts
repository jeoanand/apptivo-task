import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStatsComponent } from './contact-stats.component';

describe('ContactStatsComponent', () => {
  let component: ContactStatsComponent;
  let fixture: ComponentFixture<ContactStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
