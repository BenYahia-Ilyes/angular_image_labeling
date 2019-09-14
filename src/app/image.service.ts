import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {    
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}    
const Imagesdelatils = [    
    { "id": 1, "brand": "Apple", "url": "assets/Images/img1.png" },    
    { "id": 2, "brand": "Apple", "url": "assets/Images/img2.png" },    
    { "id": 3, "brand": "Apple", "url": "assets/Images/img3.png" },    
    { "id": 4, "brand": "Apple", "url": "assets/Images/img4.png" },    
    { "id": 5, "brand": "hp", "url": "assets/Images/img5.jpg" },    
    { "id": 6, "brand": "hp", "url": "assets/Images/img6.jpg" },    
    { "id": 7, "brand": "hp", "url": "assets/Images/img7.jpg" },    
    { "id": 8, "brand": "hp", "url": "assets/Images/img8.jpg" },    
  
]    