import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PostInfoComponent } from '../post-info/post-info.component';

declare var firebase: any;

@Component({
  selector: 'app-history-wall',
  templateUrl: './history-wall.component.html',
  styleUrls: ['./history-wall.component.css']
})
export class HistoryWallComponent implements OnInit {

  yearParam: String;
  posts = [];

  constructor( private route: ActivatedRoute, public dialog: MatDialog ) {
      this.route.params.subscribe(
          params => {
              this.yearParam = params[ 'year' ]
          }
      );

      this.yearParam = route.snapshot.params[ 'year' ];
  }

  ngOnInit( ) {
      firebase.database( ).ref( 'posts/' + this.yearParam ).on( 'child_added', ( snapshot ) => {
          this.posts.push({
            title: snapshot.val( ).title,
            description: snapshot.val( ).description,
            imgURL: snapshot.val( ).imgURL,
            likes: snapshot.val( ).likes,
            reports: snapshot.val( ).reports,
            key: snapshot.key
          })
      })
  }

  openInfoModal( index ) {
    let dialogRef = this.dialog.open( PostInfoComponent, {
        height: '90%',
        width: '100%'
    });

    dialogRef.componentInstance.title = this.posts[ index ].title;
    dialogRef.componentInstance.description = this.posts[ index ].description;
    dialogRef.componentInstance.imgURL = this.posts[ index ].imgURL;
    dialogRef.componentInstance.likes = this.posts[ index ].likes;
    dialogRef.componentInstance.reports = this.posts[ index ].reports;
    dialogRef.componentInstance.postFBKey = this.posts[ index ].key;
    dialogRef.componentInstance.year = Number( this.yearParam );
  }

}
