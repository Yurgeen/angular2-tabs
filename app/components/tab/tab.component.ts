import { Component, Input, OnInit } from "@angular/core";
import { TabsComponent } from "./../tabs.component";
import { Tab } from "./../tab.interface";

@Component({
  selector: "tab",
  templateUrl: "./app/components/tab/tab.component.html"
})
export class TabComponent implements Tab, OnInit {

  @Input() tabTitle;
  selected: boolean;

  constructor(private tabsComponent: TabsComponent) {}

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }
}
