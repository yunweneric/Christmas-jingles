import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricDetailsFinalComponent } from './lyric-details-final.component';

describe('LyricDetailsFinalComponent', () => {
  let component: LyricDetailsFinalComponent;
  let fixture: ComponentFixture<LyricDetailsFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricDetailsFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricDetailsFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
