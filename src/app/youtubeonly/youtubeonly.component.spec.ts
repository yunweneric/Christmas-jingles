import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeonlyComponent } from './youtubeonly.component';

describe('YoutubeonlyComponent', () => {
  let component: YoutubeonlyComponent;
  let fixture: ComponentFixture<YoutubeonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeonlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
