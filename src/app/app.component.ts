import { Component, OnInit } from '@angular/core';

declare var firebase: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit( ) {
    firebase.auth().onAuthStateChanged( user => {
        if ( user ) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;

          console.log( "user is in" )
          localStorage.setItem( 'userIsIn', 'true' )
        } else {
          localStorage.setItem( 'userIsIn', 'false' )
          console.log( "user is out" )
        }
    });
  }

}
