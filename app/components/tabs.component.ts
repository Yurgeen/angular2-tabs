import { Component, Output, EventEmitter } from "@angular/core";
import { Tab } from "tab.interface"

@Component ({
  "selector": "tabs",
  templateUrl: "./app/components/tabs.component.html"
})

export class TabsComponent {

  tabs: Tab[] = [];
  @Output() selected = new EventEmitter();

  addTab(tab:Tab):void{
    this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    this.tabs.map((tab) => {
      tab.selected = false;
    });

    tab.selected = true;
    this.selected.emit({selectedTab: tab});
  }
}
