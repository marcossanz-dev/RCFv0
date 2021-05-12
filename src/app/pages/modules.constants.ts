import { CommonModule } from "@angular/common";
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

const MODULES = [
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
];

export {
    MODULES
};