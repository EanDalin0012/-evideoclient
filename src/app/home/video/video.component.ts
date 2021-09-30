import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  src = 'http://localhost:8080/api/read/vd/v0';
  vdTitle = '';
  vdParts: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.vdTitle = 'Lung Sne Chong Pov Bosaba​';
    for (let index = 0; index < 40; index++) {
      this.vdParts.push(
        {
          part: index + 1,
          title: this.vdTitle
        },
      );

    }
  }

}
