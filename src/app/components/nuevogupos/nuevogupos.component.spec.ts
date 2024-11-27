import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoguposComponent } from './nuevogupos.component';

describe('NuevoguposComponent', () => {
  let component: NuevoguposComponent;
  let fixture: ComponentFixture<NuevoguposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoguposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoguposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
