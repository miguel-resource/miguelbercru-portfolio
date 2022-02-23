import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll():any {
    return this.firestore.collection("messages").snapshotChanges();
  }

  create(data:any):any {
    return this.firestore.collection("messages").add(data);
  }
}
