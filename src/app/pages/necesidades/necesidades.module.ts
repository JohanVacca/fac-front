import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NecesidadesRoutingModule } from './necesidades-routing.module';
import { NecesidadesHomeComponent } from './necesidades-home/necesidades-home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

import { FormulacionRoutingModule, routedComponents } from '../formulacion/formulacion-routing.module';
import { FormsModule} from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { AdminModule } from '../admin/admin.module';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {SharedModule} from '../../shared/shared.module';
import { NecesidadesTableComponent } from './necesidades-table/necesidades-table.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [NecesidadesHomeComponent, NecesidadesTableComponent],
    imports: [
        MatSortModule,
        CommonModule,
        NecesidadesRoutingModule,
        MatFormFieldModule,
        MatTableModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        FormulacionRoutingModule,
        MatDialogModule,
        FormsModule,
        CommonModule,
        MatSlideToggleModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        AdminModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatTooltipModule,
        MatSelectModule,
        MatTabsModule,
        MatToolbarModule,
        CKEditorModule,
        ScrollingModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        SharedModule,
    ],
    exports : [
      NecesidadesTableComponent, NecesidadesHomeComponent,
    ]
})
export class NecesidadesModule { }