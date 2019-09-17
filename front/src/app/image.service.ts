import { Injectable } from '@angular/core'    
import { HttpClient } from '@angular/common/http'

@Injectable()    
export class ImageService {    
    allImages = [];    
    serverData: JSON;
     saved: JSON;
  constructor(public http: HttpClient) {    }


    get_paths(){
    this.http.get('http://127.0.0.1:5000/image_list').subscribe(data => {
        this.serverData = data as JSON;




        for (var i = 0; i < this.serverData.result.path_list.length; i++) {
            var singleObj = {};
            singleObj['id'] = i+1;
            singleObj['color'] = "";
            singleObj['brand'] = "";
            singleObj["license"] = "";
            singleObj["url"] = this.serverData.result.path_list[i];

            Imagesdelatils.push(singleObj);                }


        console.log(Imagesdelatils); 
        

    })  

    }   

    getImages() {    
        return this.allImages = Imagesdelatils;    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.find(Images => Images.id == id)    
    }    



    get_color(id: number) {    
        return Imagesdelatils.find(Images => Images.id == id).color
    }     

    set_color(id: number,c : string) {    
        Imagesdelatils[id-1].color=c

    }  


    get_brand(id: number) {    
        return Imagesdelatils.find(Images => Images.id == id).brand
    }     

    set_brand(id: number,b : string) {    
        Imagesdelatils[id-1].brand=b
    }  


    get_license(id: number) {    
        return Imagesdelatils.find(Images => Images.id == id).license
    }     

    set_license(id: number,l : string) {    
        Imagesdelatils[id-1].license=l
    }  





    save(id : number){
        var x= Imagesdelatils[id-1]
        this.http.post('http://127.0.0.1:5000/save',x).subscribe(data => {
            this.saved = data as JSON;
    
            console.log(this.saved); 
 
        })  

        }   


}    
const Imagesdelatils = [    

]    
