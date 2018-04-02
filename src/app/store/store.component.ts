import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  moduleId: module.id,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    // Встроенная директива ngFor , предоставляемая Angular, позволяет 
    // генерировать контент только для объектов из массива или коллекции (без
    // использования счетчика). Так как нам нужно сгенерировать пронумерованные
    // кнопки навигации между страницами, приходится создавать массив с нужными
    // числами
    return Array(Math.ceil(this.repository
    .getProducts(this.selectedCategory).length / this.productsPerPage))
    .fill(0).map((x, i) => i + 1);
  }

}
