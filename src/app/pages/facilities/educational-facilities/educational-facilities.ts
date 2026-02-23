import { Component } from '@angular/core';

@Component({
  selector: 'app-educational-facilities',
  imports: [],
  templateUrl: './educational-facilities.html',
  styleUrl: './educational-facilities.css',
})
export class EducationalFacilities {
ngAfterViewInit() {
  const blocks = document.querySelectorAll('.edu-block');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  blocks.forEach(block => observer.observe(block));
}
}
