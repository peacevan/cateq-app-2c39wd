import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroTurmasPage } from './cadastro-turmas.page';

describe('CadastroTurmasPage', () => {
  let component: CadastroTurmasPage;
  let fixture: ComponentFixture<CadastroTurmasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroTurmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
