import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoPrincipalComponent } from './cuerpo-principal.component';

describe('CuerpoPrincipalComponent', () => {
  let component: CuerpoPrincipalComponent;
  let fixture: ComponentFixture<CuerpoPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuerpoPrincipalComponent]
    });
    fixture = TestBed.createComponent(CuerpoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
