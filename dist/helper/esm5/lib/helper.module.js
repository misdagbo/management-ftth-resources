/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
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
var HelperModule = /** @class */ (function () {
    function HelperModule() {
    }
    /**
     * @return {?}
     */
    HelperModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: HelperModule,
            providers: [
                TranslateProviders,
                TranslateService
            ]
        };
    };
    HelperModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return HelperModule;
}());
export { HelperModule };
function HelperModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HelperModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HelperModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbHBlci8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7O0lBd0I3RCxvQkFBTzs7O0lBQWQ7UUFDSSxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1Asa0JBQWtCO2dCQUNsQixnQkFBZ0I7YUFDbkI7U0FDSixDQUFDO0tBQ0w7O2dCQTlCSixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixlQUFlO3dCQUNmLGtCQUFrQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixlQUFlO3dCQUNmLGtCQUFrQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsU0FBUyxDQUFDLE9BQU8sRUFBRTtxQkFDdEI7aUJBQ0o7O3VCQWhDRDs7U0FpQ2EsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL190cmFuc2xhdGVzL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vX3RyYW5zbGF0ZXMvdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQcm92aWRlcnMgfSBmcm9tICcuL190cmFuc2xhdGVzL3RyYW5zbGF0ZXMnO1xyXG5pbXBvcnQgeyBBZHZhbmNlZFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9fY29tcG9uZW50cy9hZHZhbmNlZC10YWJsZS9hZHZhbmNlZC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVSVZpZXdEaXJlY3RpdmUgfSBmcm9tICcuL19kaXJlY3RpdmVzL3VpLXZpZXcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVXBwZXJDYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9fZGlyZWN0aXZlcy91cHBlci1jYXNlLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVHJhbnNsYXRlUGlwZSxcclxuICAgICAgICBBZHZhbmNlZFRhYmxlQ29tcG9uZW50LFxyXG4gICAgICAgIFVJVmlld0RpcmVjdGl2ZSxcclxuICAgICAgICBVcHBlckNhc2VEaXJlY3RpdmUsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFRyYW5zbGF0ZVBpcGUsXHJcbiAgICAgICAgQWR2YW5jZWRUYWJsZUNvbXBvbmVudCxcclxuICAgICAgICBVSVZpZXdEaXJlY3RpdmUsXHJcbiAgICAgICAgVXBwZXJDYXNlRGlyZWN0aXZlLFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5nYk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVscGVyTW9kdWxlIHtcclxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBIZWxwZXJNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlUHJvdmlkZXJzLFxyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlU2VydmljZVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=