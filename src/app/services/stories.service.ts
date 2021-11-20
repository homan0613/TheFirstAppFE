import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHelpperService } from '../components/Helpper/api-helpper.service';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private ApiHelper:ApiHelpperService) { }

  readonly ControllerName = "Stories";
  readonly rootUrl  = this.ApiHelper.RootUrl;

  postStory(formData:  Story){
    return this.ApiHelper.PostApi(this.ControllerName, formData)
  }

  putStory(id:any, formData:  Story){
    return this.ApiHelper.PutApiWithId(this.ControllerName, id, formData);
  }

  getAllStory(): Observable<any>{
    return this.ApiHelper.GetApiWithOption(this.ControllerName);
  }
  
  getStoryById(id:any){
    return this.ApiHelper.GetApiById(this.ControllerName, id);
  }

  deleteStory(id:any){
    return this.ApiHelper.DeleteApi(this.ControllerName, id);
  }

    
  getImageById(storyId:string){
    return this.ApiHelper.GetApiById(`Images/Stories`, storyId);
  }
 
  getAudioById(storyId:string){
    return this.ApiHelper.GetApiById(`Audios/Stories`, storyId);
  }

}
