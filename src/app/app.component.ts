import { Component, VERSION } from '@angular/core';
import { GridType, DisplayGrid, GridsterConfig } from 'angular-gridster2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  outerGridOptions:GridsterConfig = {
    gridType: GridType.VerticalFixed,
    fixedRowHeight: 18,
    enableEmptyCellDrop: true,
    pushItems: true,
    swap: true,
    outerMargin: false,
    mobileBreakpoint: 0,
    pushDirections: { north: true, east: true, south: true, west: true },
    resizable: { enabled: true },
    draggable: {
      enabled: true,
      ignoreContent: true,
      dropOverItems: true,
      dragHandleClass: 'drag-handler',
      ignoreContentClass: 'no-drag',
    },
    displayGrid: DisplayGrid.Always,
    minCols: 50,
    maxCols: 50,
    maxRows: 5000
  };

  innerGridOptions:GridsterConfig = {
    gridType: GridType.VerticalFixed,
    fixedRowHeight: 18,
    enableEmptyCellDrop: true,
    pushItems: true,
    swap: true,
    outerMargin: false,
    mobileBreakpoint: 0,
    pushDirections: { north: true, east: true, south: true, west: true },
    resizable: { enabled: true },
    draggable: {
      enabled: true,
      ignoreContent: true,
      dropOverItems: true,
      dragHandleClass: 'drag-handler',
      ignoreContentClass: 'no-drag',
    },
    displayGrid: DisplayGrid.Always,
    minCols: 50,
    maxCols: 50,
    maxRows: 5000
  };

  innerGridComponent: any;
  parenObjectWidthOnGridInitialization: string;
  parenObjectWidthOnOuterGridItemInitialization: string;
  parentObjectWidthAfterSetTimeout: string;

  constructor() {
    this.outerGridOptions = {
      ...this.outerGridOptions,
      initCallback: this.handleOuterGridInitialize.bind(this),
      itemInitCallback: this.handleOuterGridItemInitialize.bind(this)
    };
    this.innerGridOptions = {
      ...this.innerGridOptions,
      initCallback: this.handleInnerGridInitialize.bind(this),
      itemInitCallback: this.handleInnerGridItemInitialize.bind(this)
    };
  }

  handleOuterGridInitialize(gridCompo) {
    console.log(gridCompo);
  }

  handleOuterGridItemInitialize(item,itemCompo) {
   this.parenObjectWidthOnOuterGridItemInitialization = this.innerGridComponent.curColWidth; 

   setTimeout(()=>{
     this.parentObjectWidthAfterSetTimeout = this.innerGridComponent.curColWidth;
   },0)
   console.log(item,itemCompo);
  }

  handleInnerGridInitialize(gridCompo) {
    this.innerGridComponent = gridCompo;
    this.parenObjectWidthOnGridInitialization = gridCompo.curColWidth;
    console.log(gridCompo);
  }

  handleInnerGridItemInitialize(item,itemCompo) {
    console.log(item,itemCompo);
  }
}
