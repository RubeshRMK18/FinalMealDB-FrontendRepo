import { Component, OnInit } from '@angular/core';
import { MealDTO, Mealservice } from '../../../../src/Services/mealservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu implements OnInit {
menu: MealDTO[] = [];
searchId: number | null = null;
selectedMeal: MealDTO | null = null;
newmeal: MealDTO = { id: 0, name: '', price: 0 };
constructor(private mealservice: Mealservice  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadMenu(): void {
    this.mealservice.getAll().subscribe((data) => {
      this.menu = data;
    });
  }
     search(): void {
    if (this.searchId) {
      this.mealservice.getById(this.searchId).subscribe({
        next: (data) => { this.selectedMeal = data; },
        error: () => { this.selectedMeal = null; alert('Meal not found!'); }
      });
    }
  }
  createMeal(): void {
    this.mealservice.create(this.newmeal).subscribe(() => {
      this.loadMenu();
      this.newmeal = { id: 0, name: '', price: 0 };
      this.loadMenu();
    });
  }
}
