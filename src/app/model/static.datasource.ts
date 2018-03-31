import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Prod1", "Category1", "Prod1 (Cat1)", 100),
        new Product(2, "Prod2", "Category1", "Prod2 (Cat1)", 100),
        new Product(3, "Prod3", "Category1", "Prod3 (Cat1)", 100),
        new Product(4, "Prod4", "Category1", "Prod4 (Cat1)", 100),
        new Product(5, "Prod5", "Category1", "Prod5 (Cat1)", 100),
        new Product(6, "Prod6", "Category2", "Prod6 (Cat2)", 100),
        new Product(1, "Prod7", "Category2", "Prod7 (Cat2)", 100),
        new Product(1, "Prod8", "Category2", "Prod8 (Cat2)", 100),
        new Product(1, "Prod9", "Category2", "Prod9 (Cat2)", 100),
        new Product(1, "Prod10", "Category3", "Prod10 (Cat3)", 100),
        new Product(1, "Prod11", "Category3", "Prod11 (Cat3)", 100),
        new Product(1, "Prod12", "Category3", "Prod12 (Cat3)", 100),
        new Product(1, "Prod13", "Category3", "Prod13 (Cat3)", 100),
        new Product(1, "Prod14", "Category3", "Prod14 (Cat3)", 100),
        new Product(1, "Prod15", "Category3", "Prod15 (Cat3)", 100),
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }
}