import { Component } from '@angular/core';
import { MasterServicesService } from '../services/master-services.service';
import { Gender } from '../models/gender';
import { NgFor } from '@angular/common';
import { Category } from '../models/category';

@Component({
  selector: 'app-registration-public',
  standalone: true,
  imports: [NgFor],
  templateUrl: './registration-public.component.html',
  styleUrl: './registration-public.component.css'
})
export class RegistrationPublicComponent {
  genders: Gender[] = [];
  categories: Category[] = [];
  constructor(private masterService: MasterServicesService) { }
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
}
