import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {

  serverData: JSON;
   saved: JSON;
constructor(public http: HttpClient) {    }



 cam_list(){
  this.http.get('http://127.0.0.1:5000/cam_list').subscribe(data => {
      this.serverData = data as JSON;


      for (var i = 0; i < this.serverData.length; i++) {
        var singleObj = {}              ;
        singleObj['id'] = i+1           ;
        singleObj['color'] = this.serverData[i][0]     ;
        singleObj['brand'] =this.serverData[i][1]        ;
        singleObj["license"] = this.serverData[i][2]       ;

        cam_res.push(singleObj);                }


    console.log(cam_res); 
    


  })  

  }   



      get_camcolor(id: number) {    
        return cam_res.find(Images => Images.id == id).color
      }     

      get_cambrand(id: number) {    
        return cam_res.find(Images => Images.id == id).brand
      }  

      get_camlicense(id: number) {    
        return cam_res.find(Images => Images.id == id).license
      }  

}

  const cam_res = [    

  ]    
  
  
