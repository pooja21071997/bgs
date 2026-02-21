import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-academics',
  imports: [PdfViewerModule,CommonModule],
  templateUrl: './academics.html',
  styleUrl: './academics.css',
})
export class Academics {
pdfSrc = '/assets/files/Diary-2025-26.pdf';
//pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

page = 1;
totalPages = 0;
zoom = 0.6;

afterLoad(pdf: any) {
  this.totalPages = pdf.numPages;
  this.fitToPage();
}

fitToPage() {
  // Adjust zoom for screen size (trial-tested values)
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    this.zoom = 0.6;
  } else if (screenWidth < 1200) {
    this.zoom = 0.8;
  } else {
    this.zoom = 0.6;
  }
}

nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.animatePage();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.animatePage();
    }
  }

  animatePage() {
    const viewer = document.querySelector('.pdf-card');
    viewer?.classList.add('fade');
    setTimeout(() => {
      viewer?.classList.remove('fade');
    }, 400);
  }

  zoomIn() {
    if (this.zoom < 2) {
      this.zoom += 0.1;
    }
  }

  zoomOut() {
    if (this.zoom > 0.3) {
      this.zoom -= 0.1;
    }
  }

}
