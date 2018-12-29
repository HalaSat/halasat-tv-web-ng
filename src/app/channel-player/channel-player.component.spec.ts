import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPlayerComponent } from './channel-player.component';

describe('ChannelPlayerComponent', () => {
  let component: ChannelPlayerComponent;
  let fixture: ComponentFixture<ChannelPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
