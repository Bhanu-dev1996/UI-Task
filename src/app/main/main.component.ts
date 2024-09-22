import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  isOffcanvasVisible = false;
  istoggleVisible = true
  progressValue = 0;
  intervalId: any;

  constructor(private messageService: MessageService) {}

   // Function to start the migration
   startMigration() {
    this.isOffcanvasVisible = true;
    this.istoggleVisible = true; // Show the offcanvas when start is clicked
    this.progressValue = 0; // Reset progress value

    // Start the progress bar simulation
    this.intervalId = setInterval(() => {
      if (this.progressValue < 100) {
        this.progressValue += 1;
      } else {
        clearInterval(this.intervalId);
        this.isOffcanvasVisible = false; // Hide offcanvas
        alert('The migration process has been successfully completed!') //Show alert
        // Show success toast using PrimeNG's MessageService
        this.messageService.add({
          severity: 'success',
          summary: 'Migration Complete',
          detail: 'The migration process has been successfully completed!',
          life: 3000
        });
      }
    }, 300); // Increment every 100ms (this can be adjusted for speed)
  }
  
  

  // Function to toggle the visibility of the offcanvas
  toggleOffcanvas() {
    this.isOffcanvasVisible = !this.isOffcanvasVisible;
  }
}