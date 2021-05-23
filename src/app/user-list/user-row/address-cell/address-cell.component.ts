import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/domain-model/Address';

@Component({
  selector: 'app-address-cell',
  templateUrl: './address-cell.component.html',
  styleUrls: ['./address-cell.component.css']
})
export class AddressCellComponent {
  @Input() address!: Address
  constructor() { }
}
