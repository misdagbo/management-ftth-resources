import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from './_translates/translate.pipe';
import { TranslateService } from './_translates/translate.service';
import { TranslateProviders } from './_translates/translates';
import { AdvancedTableComponent } from './_components/advanced-table/advanced-table.component';
import { UIViewDirective } from './_directives/ui-view.directive';
import { UpperCaseDirective } from './_directives/upper-case.directive';

@NgModule({
    declarations: [
        TranslatePipe,
        AdvancedTableComponent,
        UIViewDirective,
        UpperCaseDirective,
    ],
    exports: [
        TranslatePipe,
        AdvancedTableComponent,
        UIViewDirective,
        UpperCaseDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule.forRoot(),
    ],
})
export class HelperModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HelperModule,
            providers: [
                TranslateProviders,
                TranslateService
            ]
        };
    }
}
