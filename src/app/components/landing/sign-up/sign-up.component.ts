import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

declare var firebase: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SignUpComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  signUp( email, password, password_c ) {
      if ( password == password_c )
        firebase.auth( ).createUserWithEmailAndPassword( email, password ).then( snapshot => {
            localStorage.setItem( 'userIsIn', 'true' )
            this.dialogRef.close( )
          }
        )
  }

}
