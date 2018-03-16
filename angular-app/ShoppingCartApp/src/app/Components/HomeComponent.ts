import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../Services/UserService';
import { Session } from 'selenium-webdriver';
import { ProductService } from '../Services/ProductService';


@Component({
    selector: 'shoppingcart-home',
    templateUrl: 'HomeComponent.html'
})
export class HomeComponent {

    data = [];
    userName: string;
    imageUrl:string;
    catagory:string;
    FLAG = 0;
    catagoryData = [];
    catagaries = ["Electronics","Mobiles","Cloaths","Fitness","Kids"];
    user : any;

    constructor(private userService: UserService, private route: ActivatedRoute,
        private router: Router, private productService: ProductService) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userName = this.user.FirstName + " " + this.user.LastName;
        this.imageUrl = "assets/laptopImage.jpg";
        this.catagory = "--Select";
    }
    ngOnInit() {
        this.productService.GetAllProducts()
            .then(r => this.data = r)
            .catch(r => alert(r));
    }

    DeleteProduct(id) {
        this.productService.DeleteProduct(id)
            .then(r => {
                alert("Product Deleted");
                this.ngOnInit();
                console.log(this.data.length);
            })
            .catch(r => { console.log(r) });
    }

    EditProduct(id,pname,pcatagory,pcost,discount){
        console.log(id,pname,pcatagory,pcost,discount);
        this.router.navigate(['product',id]);
    }

    ShowProductsByCatagory(){
        console.log("inside this..");
        console.log(this.catagory);
        this.catagoryData=[];
        this.FLAG = 1;
        for(let detail of this.data){
            if(this.catagory == detail.ProductCatagory)
            {
                console.log("Inside if..");
                this.catagoryData.push(detail);
            }
        }
    }

    Cancel(){
        console.log("Inside cancel class..");
        this.catagory = "--Select";
        this.FLAG = 0;
    }
}