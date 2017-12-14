import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

declare var firebase: any;

@Component({
  selector: 'app-post-exp',
  templateUrl: './post-exp.component.html',
  styleUrls: ['./post-exp.component.css']
})
export class PostExpComponent implements OnInit {

  fileName:string;
  imageURL:string;
  fileList: FileList;
  file:File;
  fileReader: FileReader = new FileReader();
  uploadImageResponse$;

  years = [];

  constructor(public dialogRef: MatDialogRef<PostExpComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  fileChange(event) {
    this.fileList = event.target.files;
    if(this.fileList.length > 0) {
      this.file = this.fileList[0];
      this.fileName = this.file.name;
      this.fileReader.onload = (e: any) => {
          this.imageURL = e.target.result;
      }

      this.fileReader.readAsDataURL(this.file);

    }
  }

  uploadPost( title, description, year ) {
      var m = Math.floor( Math.random( ) * Number.MAX_VALUE )
      firebase.storage( ).ref( '/images' ).child( '/' + year + '/' + this.fileName + m ).put( this.file ).then( snapshot => {
        firebase.database( ).ref( '/posts/' + year  ).push({
          title: title,
          description: description,
          imgURL: snapshot.downloadURL,
          likes: 0,
          reports: 0,
          comments: []
        }).then( snapshot =>{
          this.dialogRef.close( )
        })
      })
  }

}
