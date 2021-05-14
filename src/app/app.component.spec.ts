import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {} from 'jest-image-snapshot';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { LoginComponent } from './pages/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser'
import { CheckImportsTableComponent } from './pages/check-imports-table/check-imports-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResizableModule } from 'angular-resizable-element';

describe('AppComponent functions', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        BrowserModule,
        CdkTableModule,
        MatCheckboxModule,
        MatSortModule,
        MatTableModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ResizableModule,
        MatMenuModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        SimpleTableComponent,
        CheckImportsTableComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });


});
