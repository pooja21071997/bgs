import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-facilities',
  imports: [],
  templateUrl: './sports-facilities.html',
  styleUrl: './sports-facilities.css',
})
export class SportsFacilities {
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
