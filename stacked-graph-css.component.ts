import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-graph-css',
  templateUrl: './stacked-graph-css.component.html',
  styleUrls: ['./stacked-graph-css.component.scss']
})
export class StackedGraphCssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    for(let index=0; index < this.graphValues.length; index++){
      // legend content
      let check = this.isInArray(this.graphValues[index].content, this.legend);
      if(!check){
        this.legend.push(this.graphValues[index].content);
      }
      
      //
      this.totalGraphValue = this.totalGraphValue + this.graphValues[index].value;
    }
    for(let index=0; index < this.graphValues.length; index++){
      this.graphValues[index].value = Math.floor((this.graphValues[index].value/this.totalGraphValue)*100);
      console.log("percentage: "+this.graphValues[index].value);
    }
    
    

  }

  totalGraphValue:number = 0;
  graphValues = [
    {
      content:"Verde",
      date:"13 oct",
      value:40
    },
    {
      content:"Arancione",
      date:"1 oct",
      value:40
    },
    {
      content:"Rosso",
      date:"9 oct",
      value:20
    },
    {
      content:"Arancione",
      date:"1 oct",
      value:34
    },
    {
      content:"Verde",
      date:"13 oct",
      value:69
    }
  ];
  months=["oct","nov","dec","jan","feb","mar","apr","may","jun","jul","aug","sep"];
  legend=[];

  isInArray(value, array) {
    return array.indexOf(value) > -1;
  }
  

}
