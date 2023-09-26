import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screen-a',
  templateUrl: './screen-a.component.html',
  styleUrls: ['./screen-a.component.scss']
})
export class ScreenAComponent {
  @Input({required:false}) input1!: string
  @Output() myCustomEvent: EventEmitter<string> = new EventEmitter();
  ngOnInit() {
    console.log(this.input1)
  }
}
