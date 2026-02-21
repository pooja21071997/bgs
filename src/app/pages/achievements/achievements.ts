import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
ngAfterViewInit() {
  const cards = document.querySelectorAll('.achievement-card');

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
