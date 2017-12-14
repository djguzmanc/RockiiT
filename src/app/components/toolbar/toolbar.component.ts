import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SignUpComponent } from '../landing/sign-up/sign-up.component';
import { SignInComponent } from '../landing/sign-in/sign-in.component';
import { Router } from "@angular/router";

declare var firebase: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  _userIsIn = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
      var userIsIn = localStorage.getItem( 'userIsIn' )
      if ( userIsIn == "true" ) {
          this._userIsIn = true
        }
      else
          this._userIsIn = false
  }

  openSignUp() {
    let dialogRef = this.dialog.open( SignUpComponent, {
        height: '600px',
        width: '700px'
    });

    dialogRef.afterClosed( ).subscribe(
      res => {
        var userIsIn = localStorage.getItem( 'userIsIn' )
        if ( userIsIn == "true" )
            this._userIsIn = true
        else
            this._userIsIn = false
      }
    )
  }

  openSignIn() {
    let dialogRef = this.dialog.open( SignInComponent, {
        height: '500px',
        width: '700px'
    });
    dialogRef.afterClosed( ).subscribe(
      res => {
        var userIsIn = localStorage.getItem( 'userIsIn' )
        if ( userIsIn == "true" )
            this._userIsIn = true
        else
            this._userIsIn = false
      }
    )
  }

  signOut( ) {
      firebase.auth( ).signOut( ).then( snapshot => {
        localStorage.setItem( 'userIsIn', 'false' )
        this._userIsIn = false;
      });
  }

  fff( ) {
    console.log( this._userIsIn )
  }

}
