import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  ngAfterViewInit(): void {
    this.animateCounters();
    this.setupScrollFade();
  }

  // Count-up animation
  private animateCounters(): void {
    const counters = document.querySelectorAll<HTMLElement>('.count');
    counters.forEach((counter: HTMLElement) => {
      const target = Number(counter.getAttribute('data-target'));
      let count = 0;
      const increment = target / 100;

      const updateCount = () => {
        if(count < target){
          count += increment;
          counter.innerText = Math.ceil(count).toString();
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target.toString();
        }
      };

      updateCount();
    });
  }

  // Fade-in on scroll
  private setupScrollFade(): void {
    const statCards = document.querySelectorAll('.stat-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    statCards.forEach(card => observer.observe(card));
  }
}
