import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const matModules = [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,

];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class MyMatModule { }