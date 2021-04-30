import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './pages/components/table/table.component';
import { LoginComponent } from './pages/login/login.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent,
        AppComponent,
        LoginComponent, 
      ],
      imports:[
        BrowserModule,
        MatTableModule,
        MatCheckboxModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RCFv0'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RCFv0');
  });
});
