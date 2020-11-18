import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(public router: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id);
  }
}
