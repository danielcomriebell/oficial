import { Component, OnInit } from '@angular/core';
import { CubeService } from '../cube.service';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {
  private canEleId = 'renderCanvas';

  constructor(private cube: CubeService) { }

  ngOnInit() {
    this.cube.createScene(this.canEleId);
    this.cube.animate();
  }

}
