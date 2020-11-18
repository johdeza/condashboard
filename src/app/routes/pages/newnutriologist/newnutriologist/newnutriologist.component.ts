import { NewnutriologistService } from './../../Service/newnutriologist.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newnutriologist',
  templateUrl: './newnutriologist.component.html',
  styleUrls: ['./newnutriologist.component.scss'],
})
export class NewnutriologistComponent implements OnInit {
  constructor(private newnutriologistService: NewnutriologistService, public router: ActivatedRoute) {}

  newNutriologist = new FormGroup({
    address: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    clinicName: new FormControl('', Validators.required),
    addressClinic: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    identificationCard: new FormControl('', Validators.required),
    roleId: new FormControl('2', Validators.required),
  });

  savedNutriologist() {
    console.log('Registro nuevo nutriologo realizado...');
    console.log(this.newNutriologist.value);
    this.newnutriologistService.savedNutriologist(this.newNutriologist.value).subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    let token = this.router.snapshot.paramMap.get('token');
    console.log(id, token);
  }
}
