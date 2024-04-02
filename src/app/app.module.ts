import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {ProductService} from './demo/service/product.service';
import {MesaService} from "./demo/service/mesa.service";
import {CountryService} from './demo/service/country.service';
import {CustomerService} from './demo/service/customer.service';
import {EventService} from './demo/service/event.service';
import {IconService} from './demo/service/icon.service';
import {NodeService} from './demo/service/node.service';
import {PhotoService} from './demo/service/photo.service';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {environment} from "../environments/environment";
import {SharedModule} from './shared.module';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, provideFirebaseApp(() => initializeApp({
        "projectId": "autenticacao-36477",
        "appId": "1:467943890880:web:07401c9cf49da425d7f225",
        "storageBucket": "autenticacao-36477.appspot.com",
        "apiKey": "AIzaSyArcgSXkYniHmfgQEZxhBd7f14vk8hioxI",
        "authDomain": "autenticacao-36477.firebaseapp.com",
        "messagingSenderId": "467943890880",
        "measurementId": "467943890880"
    })), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()),
        SharedModule],
    providers: [
        {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,MesaService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
