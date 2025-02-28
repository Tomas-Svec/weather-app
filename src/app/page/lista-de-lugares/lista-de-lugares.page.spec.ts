import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeLugaresPage } from './lista-de-lugares.page';

describe('ListaDeLugaresPage', () => {
  let component: ListaDeLugaresPage;
  let fixture: ComponentFixture<ListaDeLugaresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeLugaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
