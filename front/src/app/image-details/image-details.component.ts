import { Component } from '@angular/core';    
import { ImageService } from '../image.service';    
import { ActivatedRoute } from '@angular/router'    

@Component({    
  templateUrl: './image-details.component.html',    
  styleUrls: ['./image-details.component.css']    
})    
export class ImageDetailComponent {    
  image:any   
  color = ""
  license = ""
  brand = ""
  size = ""


  constructor(private imageService: ImageService,    
    private route: ActivatedRoute) { }

  
    
    print(){

      //console.log(this.image.id)
      //this.imageService.get_paths()
      //console.log("yoo")

    }

        
    savee(){
      this.imageService.set_color(this.image.id,this.color)
      this.imageService.set_brand(this.image.id,this.brand)
      this.imageService.set_license(this.image.id,this.license)

      console.log("yoo")

      this.imageService.save(this.image.id)


    }

  ngOnInit(){    
    
    this.image = this.imageService.getImage(    
      parseInt(this.route.snapshot.url[1].path)   )    

    this.color=  this.imageService.get_color(this.image.id)
    this.brand=  this.imageService.get_brand(this.image.id)
    this.license=  this.imageService.get_license(this.image.id)

  }    

  

} 