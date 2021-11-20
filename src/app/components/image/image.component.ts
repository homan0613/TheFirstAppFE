import { Component, Input, OnInit } from '@angular/core';
import { ApiHelpperService } from '../Helpper/api-helpper.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(public apiServie: ApiHelpperService) { }

  @Input()
  public action : string = '';
   @Input()
  public actionId : string = '';
  @Input()
  public imageId : string ='';

  images:any;
  src: string = "";
  ngOnInit(): void {
    this.getImageById(this.action, this.actionId, this.imageId);
  }

  getImageById(action:string, actionId:string, imageId:string){
    //this.apiServie.GetApiById(`${action}/${actionId}`,imageId).subscribe(
    this.apiServie.GetApiById(`Images/${action}`, actionId).subscribe(
      rs =>{
          this.images = rs;
          this.apiServie.RootUrl
          this.src = `${this.apiServie.RootUrl}/${this.images[imageId].path}`;
          console.log(this.images[imageId].path);
      }
    )
  }

}
