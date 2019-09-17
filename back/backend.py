from flask import Flask, jsonify, request, json
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from imutils import paths


import pandas as pd  
import cv2

app = Flask(__name__)


bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)





@app.route('/image_list')
def get_images():
    path="/home/ilyes/bachman/angular/fill_dataset/front/fillDataset/src/assets/Images"
    imagePaths = sorted(list(paths.list_images(path)))
   
    path_list=[]
    for path in imagePaths:
        splitt=path.split("/")
        x=splitt[-3]+"/"+splitt[-2]+"/"+splitt[-1]
        path_list.append(x)



    result = {

        'path_list' : path_list,
	}

    return jsonify({'result' : result})
	

listframe=[]
id_list=[]


@app.route('/save', methods=['POST'])
def register():
    id = request.get_json()['id']
    url = request.get_json()['url']
    color = request.get_json()['color']
    brand = request.get_json()['brand']
    license = request.get_json()['license']



    templist=[]
    templist.append(id)
    templist.append(color)
    templist.append(brand)
    templist.append(url)
   
    #print(color)

    if id in id_list:
        for j in listframe:
            if (j[0]==id) :
                listframe.remove(j)


    listframe.append(templist)

    df = pd.DataFrame(listframe, columns = ['id','color','brand','license'])
    df.to_csv('/home/ilyes/Desktop/out.csv')
    id_list.append(id)


    result = {
		'state' : "saved"
	}

    print(request.get_json())
    return jsonify({'result' : result})
	


@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})


@app.route('/users/login', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""


    access_token = create_access_token(identity = {'first_name': email,'password ': password })
    result = jsonify({"token":access_token})
    
    print (result)
	
if __name__ == '__main__':
    app.run(debug=True)