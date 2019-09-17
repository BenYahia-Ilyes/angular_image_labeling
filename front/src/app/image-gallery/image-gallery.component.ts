import { Component, OnInit, Input, OnChanges } from '@angular/core';    
import { ImageService } from '../image.service';    
    
@Component({    
  selector: 'app-imagegallery',    
  templateUrl: './image-gallery.component.html',    
  styleUrls: ['./image-gallery.component.css']    
})    
    
export class GalleryComponent implements OnChanges {    
  images:any[];    
  filterBy?: string = 'all' 
  once=false   
 allImages:any[] = [];    
    
  constructor(private imageService: ImageService) { 
    
    if(once==false){
      this.imageService.get_paths()
      once=true
    }


    this.allImages = this.imageService.getImages();  
    
   // console.log(this.imageService.getImages())
   console.log("galery")

  }    

  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }    



}   
var once=false