import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricOnlyComponent } from './lyric-only.component';

describe('LyricOnlyComponent', () => {
  let component: LyricOnlyComponent;
  let fixture: ComponentFixture<LyricOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
