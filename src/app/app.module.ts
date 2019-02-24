import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from './_services/script-loader.service';
import { HttpInterceptorProviders } from './_interceptors/http-interceptor';
import { ThemeRoutingModule } from './theme/theme-routing.module';
import { AuthModule } from './auth/auth.module';

import { WebModule } from 'web';
import { HelperModule } from 'helper';

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot({
            closeButton: false,
            positionClass: 'toast-top-right',
            timeOut: 3000
        }),
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        HelperModule.forRoot(),
        WebModule,
    ],
    providers: [ScriptLoaderService, HttpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
