import { Component } from '@angular/core';

@Component({
  selector: 'app-day-scholar-school',
  imports: [],
  templateUrl: './day-scholar-school.html',
  styleUrl: './day-scholar-school.css',
})
export class DayScholarSchool {
 ngAfterViewInit(): void {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.2
    });

    reveals.forEach(reveal => {
      observer.observe(reveal);
    });
  }
}
