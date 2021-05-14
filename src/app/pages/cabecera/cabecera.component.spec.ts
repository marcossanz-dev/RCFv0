import { Input } from '@angular/core';
import { ComponentFixture, InjectSetupWrapper, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { CabeceraComponent } from './cabecera.component';

describe('CabeceraComponent', () => {
  let component: CabeceraComponent;
  let cabecerafixture: ComponentFixture<CabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraComponent ]
    })
    .compileComponents();
    cabecerafixture = TestBed.createComponent(CabeceraComponent);
    component = cabecerafixture.componentInstance;
  });
  
  it('should render username as testUser', () => {
    component.usuario = 'testUser';
    cabecerafixture.detectChanges();
    
    cabecerafixture.debugElement.nativeElement.textContent;
    expect(cabecerafixture.debugElement.nativeElement.textContent).toContain('testUser');
    
  });
});
