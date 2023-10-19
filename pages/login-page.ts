import { Page } from "@playwright/test";

 export class Login{
     private page:Page;
     constructor(page:Page){
         this.page = page;
     }
 }
 async acceptCookies(){
     // step using codegen from playwright
     await this.pageXOffset.getByRole("button", {name: "OK"}).click();
     // step using xpath
 }
 