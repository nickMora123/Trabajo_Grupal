import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCocheComponent } from './eliminar-coche.component';

describe('EliminarCocheComponent', () => {
  let component: EliminarCocheComponent;
  let fixture: ComponentFixture<EliminarCocheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarCocheComponent]
    });
    fixture = TestBed.createComponent(EliminarCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
