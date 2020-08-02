import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationLayoutComponent } from './core/layouts/navigation-layout/navigation-layout.component';
import { TestComponent1Component } from './test-component1/test-component1.component';
import { TestComponent2Component } from './test-component2/test-component2.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavigationLayoutComponent,
    TestComponent1Component,
    TestComponent2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
