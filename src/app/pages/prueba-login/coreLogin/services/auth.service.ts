import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { UserResponse, User} from "../models/user.interface";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient){
    this.checkToken();
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(`${environment.API_URL}`, authData)
    .pipe(
      map( (res:UserResponse) => {
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    )
  }

  logout(): void{
    localStorage.removeItem('tokenUser');
    this.loggedIn.next(false);
  }

  private checkToken(){
    //tokenUser = el token que tu guardas en la localStorage para chequear
    const userToken = localStorage.getItem('tokenUser');
    const isExpired = helper.isTokenExpired();
    isExpired ? this.logout(): this.loggedIn.next(true);
  }

  private saveToken(token: string): void{
    localStorage.setItem('tokenUser', token)
  }

  private handlerError(error: any): Observable<never>{
    let errorMessage = "An error ocurred retirving data"
    if(error){
      errorMessage = `Error: code ${error.message}`
    }

    console.log(errorMessage);
    return throwError(errorMessage)
  }
}
