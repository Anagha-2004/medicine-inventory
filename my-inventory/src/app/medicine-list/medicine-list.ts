import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicineService, Medicine } from '../medicine';

@Component({
  selector: 'app-medicine-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicine-list.html',
  styleUrls: ['./medicine-list.css']
})
export class MedicineListComponent implements OnInit {
  medicines: Medicine[] = [];
  newMedicine: Medicine = { name: '', quantity: 0, expiryDate: '' };

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines(): void {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
    });
  }

  addMedicine(): void {
    if (!this.newMedicine.name || !this.newMedicine.expiryDate) return;
    this.medicineService.addMedicine(this.newMedicine).subscribe(() => {
      this.newMedicine = { name: '', quantity: 0, expiryDate: '' };
      this.loadMedicines();
    });
  }

  deleteMedicine(id: string): void {
    this.medicineService.deleteMedicine(id).subscribe(() => {
      this.loadMedicines();
    });
  }
}
