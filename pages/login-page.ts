import { Page } from "playwright/test";


export class Login{
    private page : Page;
    constructor(page : Page){
        this.page = page;
    }
}
