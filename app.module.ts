import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';

import { EventHandlerService } from './services';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.pulse
    })
  ],
  providers: [EventHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
