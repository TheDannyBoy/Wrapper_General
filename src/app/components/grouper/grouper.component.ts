import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grouper',
  templateUrl: './grouper.component.html',
  styleUrls: ['./grouper.component.scss']
})
export class GrouperComponent implements OnInit {
  @ViewChild('ref') children: ElementRef;
  childrenCounter = 0;
  containers = [];

  constructor() { }

  ngOnInit() {
    this.childrenCounter = this.children.nativeElement.childElementCount - 1;
    console.log(this.children, this.childrenCounter);
    this.createInputs();
  }

  getRadio() {
    console.log('clicked radio');
  }

  createInputs() {
    if (this.childrenCounter > 0) {
      this.children.nativeElement.childNodes.forEach(element => {
        let inputs = [];
        const divElement = document.createElement('div');
        const inputElement = document.createElement('input');
        inputElement.type = 'radio';
        inputElement.className = 'radio';
        inputs = [...inputs, element, inputElement];
        // divElement.appendChild(inputs); // put it into the DOM
        this.containers = [...this.containers, inputs];
      });
      console.log('containers', this.containers);
    }
  }
}
