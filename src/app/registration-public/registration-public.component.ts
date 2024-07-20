import { Component } from '@angular/core';
import { MasterServicesService } from '../services/master-services.service';
import { Gender } from '../models/gender';
import { NgFor, NgIf } from '@angular/common';
import { Category } from '../models/category';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration-service';
import { error } from 'node:console';

@Component({
  selector: 'app-registration-public',
  standalone: true,
  imports: [NgFor,NgIf,ReactiveFormsModule],
  templateUrl: './registration-public.component.html',
  styleUrl: './registration-public.component.css'
})
export class RegistrationPublicComponent {
  responseData:any;
  registrationForm: FormGroup;
  genders: Gender[] = [];
  categories: Category[] = [];
  constructor(private masterService: MasterServicesService,private registrationService:RegistrationService,private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      category: ['', Validators.required]
    });

   }
  ngOnInit(): void {
    this.masterService.getGenders().subscribe(
      data => this.genders = data,
      error => console.error('Error fetching genders', error)
    );

    this.masterService.getCategories().subscribe(
      data => this.categories = data,
      error => console.error('Error fetching genders', error)
    );

  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.registrationService.registerProfile(this.registrationForm.value).subscribe(p=>{
        this.responseData=p;
        console.log(p)
      },error=>{console.log(error);}) ;
    }
  }
}
