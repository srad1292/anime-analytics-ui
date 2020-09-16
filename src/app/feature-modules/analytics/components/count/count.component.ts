import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit{

  @Input() title: string;
  
  @Input() count: number;

  @Input() isFloat: boolean;

  ngOnInit() {}

}
