import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
@Component({
  selector: 'app-grade',
   standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle],
  templateUrl: './grade.html',
  styleUrl: './grade.css',
})
export class Grade {
  diplomat = [
    { subject: "math", grade: 100 },
    { subject: "grammer", grade: 96 },
    { subject: "gim", grade: 59 },
    { subject: "tora", grade: 100 },
    { subject: "english", grade: 98 },
    { subject: "geomtriya", grade: 16 }]

    getAverage() {
    const total = this.diplomat.reduce((sum, item) => sum + item.grade, 0);
    return total / this.diplomat.length;
  }
}
