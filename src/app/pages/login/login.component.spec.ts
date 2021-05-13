<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { AppComponent } from 'src/app/app.component';
import { FilterComponent } from '../components/filter/filter.component';
import { TableComponent } from '../components/table/table.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared.module';

=======
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {} from 'jest-image-snapshot';
>>>>>>> feature/nataliadiego
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

describe('LoginComponent functions', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let router: Router;
  let component: LoginComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [AppComponent,
      ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
=======
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [LoginComponent],
    }).compileComponents();
>>>>>>> feature/nataliadiego
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });

  test('should probe form validity', () => {
    const spy = jest.spyOn(loginService, 'login');
    component.submit();
    expect(component.spinner).toBeFalsy();
    expect(spy).not.toHaveBeenCalled();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  test('check submit function', async () => {
    //consts
    const res = {
      data: {
        jwt: 'abcdXYZ',
      },
    };
    const spy = jest
      .spyOn(loginService, 'login')
      .mockReturnValue(new Observable((observer) => observer.next(res)));
    const spySet = jest.spyOn(loginService, 'setLogged');

    //form setUps
    component.loginForm.setValue({ username: 'user', password: 'password' });

    //spys
    spyOn(router, 'navigate').and.returnValue(true);

    //function call
    component.submit();

    //expects
    expect(component.loginForm.valid).toBeTruthy();
    expect(spy).toHaveBeenCalledWith('user', 'password');
    expect(spySet).toHaveBeenCalledWith(res.data.jwt);
    expect(component.spinner).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['check-imports-table']);
  });
});

describe('App Component snapshots test', () => {
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
  });

  test('should be matched with initial template', () => {
    expect(fixture).toMatchSnapshot();
  });
});
