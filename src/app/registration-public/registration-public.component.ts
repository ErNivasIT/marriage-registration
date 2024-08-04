import { Component } from '@angular/core';
import { MasterServicesService } from '../services/master-services.service';
import { Gender } from '../models/gender';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Category } from '../models/category';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration-service';
import { error } from 'node:console';

@Component({
  selector: 'app-registration-public',
  standalone: true,
  imports: [NgFor,NgIf,ReactiveFormsModule,JsonPipe],
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
      mobileNo: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      dob: ['', [Validators.required,this.dobValidator]],
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
  dobValidator(control: AbstractControl): { [key: string]: any } | null {
    const isValid = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19|20)\d\d$/.test(control.value);
    return isValid ? null : { invalidDate: true };
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
