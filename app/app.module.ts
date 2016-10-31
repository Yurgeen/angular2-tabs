import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsComponent } from "./components/tabs.component";
import { TabComponent } from "./components/tab/tab.component"
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TabsComponent, TabComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
