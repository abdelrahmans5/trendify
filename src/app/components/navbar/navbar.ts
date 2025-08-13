import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(private router: Router) { }

  scrollToSection(sectionId: string): void {
    // Check if we're currently on the home page
    if (this.router.url === '/home' || this.router.url === '/') {
      // We're on home page, just scroll to the section
      this.scrollToElement(sectionId);
    } else {
      // We're on a different page, navigate to home first, then scroll
      this.router.navigate(['/home']).then(() => {
        // Wait a bit for the component to load, then scroll
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 100);
      });
    }
  }

  private scrollToElement(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 50; // Adjust this to match your navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  // Method to navigate to home page
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  // Method to navigate to products page
  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}
