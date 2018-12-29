import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelColumnComponent } from './channel-column.component';

describe('ChannelColumnComponent', () => {
  let component: ChannelColumnComponent;
  let fixture: ComponentFixture<ChannelColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
