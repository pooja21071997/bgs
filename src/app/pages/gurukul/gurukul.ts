import { Component } from '@angular/core';

@Component({
  selector: 'app-gurukul',
  imports: [],
  templateUrl: './gurukul.html',
  styleUrl: './gurukul.css',
})
export class Gurukul {
ngAfterViewInit() {
  const cards = document.querySelectorAll('.section-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
}
}
