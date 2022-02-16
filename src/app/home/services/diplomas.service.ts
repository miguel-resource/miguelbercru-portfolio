import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class DiplomasService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll() {
    return this.firestore.collection('diplomas').snapshotChanges();
  }
}
