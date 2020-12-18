import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricDetailComponent } from './lyric-detail.component';

describe('LyricDetailComponent', () => {
  let component: LyricDetailComponent;
  let fixture: ComponentFixture<LyricDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
