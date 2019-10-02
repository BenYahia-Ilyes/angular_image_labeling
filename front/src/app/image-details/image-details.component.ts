import { Component } from '@angular/core';    
import { ImageService } from '../image.service';    
import { ActivatedRoute } from '@angular/router'    
import { GetinfoService  } from '../getinfo.service';    

@Component({    
  templateUrl: './image-details.component.html',    
  styleUrls: ['./image-details.component.css']    
})    
export class ImageDetailComponent {    
  image:any  
  test={}
 
  color   = ""
  license = ""
  brand   = ""
  size = ""

  cam_color   = ""
  cam_license = ""
  cam_brand   = ""

  id=parseInt(window.location.href.split("/")[4] )
  constructor(private imageService: ImageService,    private GetinfoService : GetinfoService,
    private route: ActivatedRoute) { 

      this.test["cam_color"]=false;
      this.test["cam_brand"]=false;
      this.test["cam_license"]=false;


    }

  
    
    print(){

      //console.log(this.image.id)
      //this.imageService.get_paths()
      //console.log("yoo")

    }

        
    save(){

    this.imageService.set_color(this.id,this.color)
    this.imageService.set_brand(this.id,this.brand)
    this.imageService.set_license(this.id,this.license)

      this.imageService.save(this.id)
    }


    check_camcolor(){  this.color==this.cam_color?   this.test["cam_color"]=true:this.test["cam_color"]=false ;   }
    check_cambrand(){  this.brand==this.cam_brand?   this.test["cam_brand"]=true:this.test["cam_brand"]=false ; }
    check_camlicense(){  this.license==this.cam_license?   this.test["cam_license"]=true:this.test["cam_license"]=false ;   }

  ngOnInit(){    
    


    this.image = this.imageService.getImage( this.id   )    

    this.color=  this.imageService.get_color(this.id)
    this.brand=  this.imageService.get_brand(this.id)
    this.license=  this.imageService.get_license(this.id)

    this.cam_color=  this.GetinfoService.get_camcolor(this.id)
    this.cam_brand=  this.GetinfoService.get_cambrand(this.id)
    this.cam_license=  this.GetinfoService.get_camlicense(this.id)



  }    

  

} 

var cam_obj={}