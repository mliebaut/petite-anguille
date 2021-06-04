import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConnexionComponent } from './my-connexion.component';

describe('MyConnexionComponent', () => {
  let component: MyConnexionComponent;
  let fixture: ComponentFixture<MyConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyConnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
