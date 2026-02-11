import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Chocolate Truffle',
      price: 550.00,
      description: 'Rich dark chocolate ganache with moist chocolate sponge.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Red Velvet',
      price: 600.00,
      description: 'Classic red velvet cake with cream cheese frosting.',
      image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Strawberry Bliss',
      price: 450.00,
      description: 'Fresh strawberries layered with vanilla sponge and cream.',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Black Forest',
      price: 500.00,
      description: 'German chocolate sponge with cherries and whipped cream.',
      image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Rainbow Delight',
      price: 750.00,
      description: 'Colorful layers of vanilla sponge with buttercream frosting.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
}
