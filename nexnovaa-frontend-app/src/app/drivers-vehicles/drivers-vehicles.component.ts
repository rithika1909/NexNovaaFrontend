import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drivers-vehicles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './drivers-vehicles.component.html',
  styleUrl: './drivers-vehicles.component.scss'
})
export class DriversVehiclesComponent {
  driverList: any[] = [];

  driver: any = {
    name: '',
    id: '',
    mobile: '',
    age: '',
    email: '',
    licenseNumber: '',
    licenseExpiry: '',
    aadhaar: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    photo: null
  };

  addDriver(): void {
    this.driverList.push({ ...this.driver });
    this.resetForm();
    const closeModalBtn = document.querySelector('#addDriverModal .btn-close') as HTMLElement;
    if (closeModalBtn) closeModalBtn.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.driver.photo = file;
  }

  resetForm(): void {
    this.driver = {
      name: '',
      id: '',
      mobile: '',
      age: '',
      email: '',
      licenseNumber: '',
      licenseExpiry: '',
      aadhaar: '',
      emergencyContactName: '',
      emergencyContactNumber: '',
      photo: null
    };
  }
}
