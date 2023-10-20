import { Page } from "@playwright/test";

export class Login{
    private page:Page;

constructor(page:Page){
    this.page=page;
}

async acceptCookies(){

await this.page.getByRole("button",{name:"OK"}).click()

}
}


