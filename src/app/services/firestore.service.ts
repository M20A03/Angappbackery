import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore = inject(Firestore);

  // Get all products from a 'cakes' collection
  getCakes(): Observable<any[]> {
    const cakeCollection = collection(this.firestore, 'cakes');
    return collectionData(cakeCollection, { idField: 'id' });
  }

  // Add a new order to an 'orders' collection
  addOrder(orderData: any) {
    const orderCollection = collection(this.firestore, 'orders');
    return addDoc(orderCollection, orderData);
  }
}