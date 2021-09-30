import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  src = 'http://localhost:8080/unsecur/api/read/vd/v0/0';
  vdTitle = '';
  vdParts: any[] = [];

  vdPartId = 0;

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
    this.vdPartId = this.vdParts[0].part;
  }

  videoEnd() {
    this.src = 'http://localhost:8080/unsecur/api/read/vd/v0/5';
  }

  changePlayVD(item:any) {
    console.log(item);
    this.vdPartId = item.part;
  }
}
