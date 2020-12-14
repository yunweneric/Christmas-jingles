import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeAndLyricComponent } from './youtube-and-lyric.component';

describe('YoutubeAndLyricComponent', () => {
  let component: YoutubeAndLyricComponent;
  let fixture: ComponentFixture<YoutubeAndLyricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeAndLyricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeAndLyricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
