import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilegalleryComponent } from './mobilegallery.component';

describe('MobilegalleryComponent', () => {
  let component: MobilegalleryComponent;
  let fixture: ComponentFixture<MobilegalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilegalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
