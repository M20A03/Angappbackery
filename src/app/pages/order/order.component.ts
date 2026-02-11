import { Component, inject } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service'; // Adjust path
import { FormsModule } from '@angular/forms'; // 1. Add this import

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule], // 2. Add FormsModule here
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

// ... other imports

export class OrderComponent {
  private firestoreService = inject(FirestoreService);
  
  // ADD THIS LINE: Define the array your HTML is looking for
  cakes: string[] = ['Chocolate Truffle', 'Vanilla Bean', 'Red Velvet', 'Blueberry Cheesecake'];

  order = {
    name: '',
    phone: '',
    address: '',
    cake: '',
    quantity: 1,
    notes: ''
  };
  // ... rest of your code
  submitOrder() {
    this.firestoreService.addOrder(this.order).then(() => {
      alert(`Order placed successfully for ${this.order.name}!`);
      // Clear form after success
      this.order = { name: '', phone: '', address: '', cake: '', quantity: 1, notes: '' };
    }).catch((err: any) => {
      console.error("Error saving order:", err);
    });
  }
}