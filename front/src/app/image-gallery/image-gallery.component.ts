import { Component, OnInit, Input, OnChanges } from '@angular/core';    
import { ImageService } from '../image.service';    
import { GetinfoService  } from '../getinfo.service';    

@Component({    
  selector: 'app-imagegallery',    
  templateUrl: './image-gallery.component.html',    
  styleUrls: ['./image-gallery.component.css']    
})    
    //implements OnChanges
export class GalleryComponent  {    
  images:any[];    
  filterBy?: string = 'all' 
 allImages:any[] = [];    
    
  constructor(private imageService: ImageService, private GetinfoService : GetinfoService) { 
    




    this.allImages = this.imageService.getImages();  
    
   // console.log(this.imageService.getImages())

  }    

  //ngOnChanges() {    
    //this.allImages = this.imageService.getImages();    
  //}    



}   
var once=false