import { MenuService } from './../../service/management/menu.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MenuModel} from '../../service/model/MenuModel'
@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})

export class AppheaderComponent implements OnInit {
  data: any;
  data1: any;
  count_value_3: any = 0;
  count_: string = "0";
  imo :any = 0;

  // MenuLevel_1: Array<MenuModel> = [];
  // MenuLevel_2: Array<MenuModel> = [];
  // MenuLevel_3: Array<MenuModel> = [];

  // MenuLevel_1:any = {
  //   MENUID: "",
  //   MENULEVEL: "",
  //   MENULEVELNAME: "",
  //   MENUPARENT: "",
  //   MENUDROP: "",
  // }
  // MenuLevel_2:any = {
  //   MENUID: "",
  //   MENULEVEL: "",
  //   MENULEVELNAME: "",
  //   MENUPARENT: "",
  //   MENUDROP: "",
  //   count_parent_dropdown: "",
  // }
  // MenuLevel_3:any = {
  //   MENUID: Array[100],
  //   MENULEVEL: Array[100],
  //   MENULEVELNAME: Array[100],
  //   MENUPARENT: Array[100],
  //   MENUDROP: Array[100],
  // }

  MenuLevel_1:any = [
    { 
        "menu": "",
        "MENULEVEL": "",
        "MENULEVELNAME": "",
        "MENUPARENT": "",
        "MENUDROP": ""
    }
  ];
  MenuLevel_2:any = [
    { 
        "menu": "",
        "MENULEVEL": "",
        "MENULEVELNAME": "",
        "MENUPARENT": "",
        "MENUDROP": "",
        "count_parent_dropdown":"",
        "count_parent_mega":"",
    }
  ];
  MenuLevel_3:any = [
    { 
        "menu": "",
        "MENULEVEL": "",
        "MENULEVELNAME": "",
        "MENUPARENT": "",
        "MENUDROP": ""
    }
  ];

  constructor(
              public service: MenuService,
              private route: ActivatedRoute,
              private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }
  getMenu(){
    var i = 0;
     this.service.getMenu()
      .subscribe(res => {
        res.menu1.forEach(element => {
          if(element.MENULEVEL == 1){
            // this.MenuLevel_1.MENUID = element.MENUID;
            // this.MenuLevel_1.MENULEVEL = element.MENULEVEL;
            // this.MenuLevel_1.MENULEVELNAME = element.MENULEVELNAME;
            // this.MenuLevel_1.MENUPARENT = element.MENUPARENT;
            // this.MenuLevel_1.MENUDROP = element.MENUDROP;
            // console.log("MenuLevel_1 = "+  this.MenuLevel_1.MENUID )
            this.MenuLevel_1.push({ 
              "MENUID": element.MENUID,
              "MENULEVEL": element.MENULEVEL,
              "MENULEVELNAME": element.MENULEVELNAME,
              "MENUPARENT": element.MENUPARENT,
              "MENUDROP": element.MENUDROP,
            });
          }
        });
        res.menu1.forEach(element => {
          if(element.MENULEVEL == 2){

            var temp_dripdown = 0; //count_parent_dropdown
            res.menu1.forEach(element_level3 => {
              if(element_level3.MENULEVEL == 3){
                if(element.MENUID == element_level3.MENUPARENT && element.MENUDROP == 1){
                  temp_dripdown = 1;
                }
              }
            });

            var temp_mega = 0; //count_parent_dropdown
            res.menu1.forEach(element_level3_mega => {
              if(element_level3_mega.MENULEVEL == 3){
                if(element.MENUID == element_level3_mega.MENUPARENT && element.MENUDROP == 2){
                  temp_mega = 1;
                }
              }
            });

            this.MenuLevel_2.push({ 
              "MENUID": element.MENUID,
              "MENULEVEL": element.MENULEVEL,
              "MENULEVELNAME": element.MENULEVELNAME,
              "MENUPARENT": element.MENUPARENT,
              "MENUDROP": element.MENUDROP,
              "count_parent_dropdown": temp_dripdown,
              "count_parent_mega": temp_mega,
            });
          }
        });
        
        res.menu1.forEach(element => {
          if(element.MENULEVEL == 3){

            this.MenuLevel_3.push({ 
              "MENUID": element.MENUID,
              "MENULEVEL": element.MENULEVEL,
              "MENULEVELNAME": element.MENULEVELNAME,
              "MENUPARENT": element.MENUPARENT,
              "MENUDROP": element.MENUDROP,
            });

            // console.log("MenuLevel_3= "+  this.MenuLevel_3.MENUID )
          }
        });
        // this.data = Array.from(new Set(res.map(s => s._MENULEVEL)))
        // .map(MENULEVEL => {
        //   return {
        //   _MENULEVEL: MENULEVEL,
        //   MENULEVEL: res.find(c => c._MENULEVEL == 1),
        //   children: res.filter(c => { return c._MENULEVEL == 1; })
        //   }
        //   });

        // const data2 = res.menu1.reduce((r,{MENULEVEL})=>{
        //     if(!r.some(o=>o.MENULEVEL==MENULEVEL)){
        //       r.push({MENULEVEL,groupItem:res.menu1.filter(v=>v.MENULEVEL==MENULEVEL)});
        // }

        // return r;
        // },[]);
        //this.data = data2;
        //this.data = res.find(r => r.MENULEVEL === "1");
        //this.data = res.menu1.Where(s => s.MENULEVEL == "1");
        this.data = res.menu1;
       console.log("maha = "+ this.MenuLevel_3)
      }, err => console.log(err))
     }

     counter(i: number ) {

      this.count_value_3 = i;
      console.log("this.count_value_3 =="+this.count_value_3);
  
    //return this.count_value_3;
  }
  
  }
  
