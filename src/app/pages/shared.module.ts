import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ResizableModule } from "angular-resizable-element";
import { FilterComponent } from "./components/filter/filter.component";
import { TableComponent } from "./components/table/table.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        LoginComponent,
        TableComponent,
        HomeComponent,
        FilterComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCheckboxModule,
        MatSortModule,
        ResizableModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,
        MatFormFieldModule,
        MatIconModule

    ],
    exports: [
        LoginComponent,
        HomeComponent,
        TableComponent,
        HomeComponent,
        FilterComponent
    ],
})
export class SharedModule { }