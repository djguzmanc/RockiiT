import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

declare var firebase: any;

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})

export class PostInfoComponent implements OnInit {

  title = "";
  description = "";
  imgURL = "";
  likes = 0;
  reports = 0;

  postFBKey = "";

  year = 0;

  constructor(public dialogRef: MatDialogRef<PostInfoComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit( ) {

  }

  like( ) {
      firebase.database( ).ref( '/posts/' + this.year ).child( String( this.postFBKey ) )
        .child( 'likes' ).set( this.likes + 1 ).then( snapshot => {
          this.likes++;
        })
  }

  report( ) {
      firebase.database( ).ref( '/posts/' + this.year ).child( String( this.postFBKey ) )
        .child( 'reports' ).set( this.reports + 1 ).then( snapshot => {
          this.reports++;
        })
  }

}
