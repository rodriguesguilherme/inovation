import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoUsuarioComponent } from './dado-usuario.component';

describe('DadoUsuarioComponent', () => {
  let component: DadoUsuarioComponent;
  let fixture: ComponentFixture<DadoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
