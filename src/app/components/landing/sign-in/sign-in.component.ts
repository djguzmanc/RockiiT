import { Component, OnInit,Inject  } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

declare var firebase: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignInComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  signIn( email, password ) {
      firebase.auth( ).signInWithEmailAndPassword( email, password ).then( ( snapshot ) => {
        localStorage.setItem( 'userIsIn', 'true' )
        this.dialogRef.close( )
      })
  }

}
