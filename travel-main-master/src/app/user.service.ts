import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './booking'; 
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url="http://localhost:3000/enroll";
   constructor(private http:HttpClient) {}
    
    enroll(user:User){
      return this.http.post<any>(this.url,user)
    }

    returnData(){
      return this.http.get<{[key:string]: any}>('https://packup-34a17-default-rtdb.firebaseio.com/user.json')
      .pipe(map((getRes) => {
        console.log(getRes);
        const bookingDetails=[];
        for(const key in getRes) {
          if(getRes.hasOwnProperty(key)){
            bookingDetails.push({...getRes[key],id:key});
          }
        }
        console.log(bookingDetails);
        return bookingDetails;
      }));
    }
    getPlace(){
      return[
        {"imgUrl":"https://images.pexels.com/photos/6472566/pexels-photo-6472566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"India Gate","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/13487368/pexels-photo-13487368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Red Fort","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/9812255/pexels-photo-9812255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Lotus Temple","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/12470213/pexels-photo-12470213.jpeg?auto=compress&cs=tinysrgb&w=600","Place":"Jama Masjid","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/14774142/pexels-photo-14774142.jpeg?auto=compress&cs=tinysrgb&w=600","Place":"Akshardham","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/12460246/pexels-photo-12460246.jpeg?auto=compress&cs=tinysrgb&w=400","Place":"Taj Hotel","Loaction":"Mumbai"},
        {"imgUrl":"https://images.pexels.com/photos/12460245/pexels-photo-12460245.jpeg?auto=compress&cs=tinysrgb&w=400","Place":"Gateway of India","Loaction":"Mumbai"},
        {"imgUrl":"https://media.istockphoto.com/id/1186045729/photo/view-of-the-tropical-forest-in-the-sanjay-gandhi-national-park-mumbai-maharashtra-india-near.jpg?s=612x612&w=0&k=20&c=iUy6QD_O98TZYb9Yi9WL0hqhC6DaTtZVbjg7lCdEwKY=","Place":"Sanjay Gandhi National Park","Loaction":"Mumbai"},
        {"imgUrl":"https://media.istockphoto.com/id/979180834/photo/elephanta-caves-historical-architecture-in-mumbai-india.jpg?s=612x612&w=0&k=20&c=DBPpMr6nBxQF8upTxZUS9S9UUq-LV5iKlH8_BCrKIh0=","Place":"Elephant Caves","Loaction":"Mumbai"},
        {"imgUrl":"https://images.thequint.com/thequint%2F2016-12%2Fadb96f5b-f93a-434a-bba3-834decba9146%2Fbef1f0a6-7ca5-44d4-9fc4-83c02b22f2af.jpg?rect=0%2C0%2C950%2C534","Place":"Chatrapati Shivaji Maharaj Terminus","Loaction":"Mumbai"},
        {"imgUrl":"https://www.tourmyindia.com/socialimg/dudhsagar-falls-goa.jpg","Place":"Dudhsagar Falls","Loaction":"Goa"},
        {"imgUrl":"https://media.gettyimages.com/id/570184923/photo/bom-jesus-basillica-world-heritage-site-goa.jpg?s=612x612&w=0&k=20&c=qeSHuHHGOEr7Cdd-e7fgdBX9jT4L2Fb2wwyIeeaCXRU=","Place":"Basilica of Bom Jesus","Loaction":"Goa"},
        {"imgUrl":"https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/08/20220758/CubbonPark2.jpg","Place":"Aguada Fort","Loaction":"Goa"},
        {"imgUrl":"https://newskarnataka.com/wp-content/uploads/2022/07/tunnel-aquarium.png","Place":"Cubbon Park","Loaction":"Banglore"},
        {"imgUrl":"https://www.karnataka.com/wp-content/uploads/2010/09/bangalore-palace-main-entrance.jpg","Place":"Benguluru Palace","Loaction":"Banglore"},
        {"imgUrl":"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"TajMahal","Loaction":"Agra"},
        {"imgUrl":"https://images.pexels.com/photos/6776755/pexels-photo-6776755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Agra Fort","Loaction":"Agra"},
        {"imgUrl":"https://images.pexels.com/photos/14939868/pexels-photo-14939868.jpeg?auto=compress&cs=tinysrgb&w=600","Place":"Taj Museum","Loaction":"Agra"},
        {"imgUrl":"https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Hawa Mahal","Loaction":"Jaipur"},
        {"imgUrl":"https://images.pexels.com/photos/13944019/pexels-photo-13944019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Jantar Mantar","Loaction":"Jaipur"},
        {"imgUrl":"https://images.pexels.com/photos/5825366/pexels-photo-5825366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Alber Hall Museum","Loaction":"Jaipur"},
        {"imgUrl":"https://images.pexels.com/photos/11969919/pexels-photo-11969919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Birla Mandir","Loaction":"Jaipur"},
      ]
    }

  }