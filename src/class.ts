type Products = {
  [key: string]: number;
}

class Mart {
  // products: 마트에 있는 제품들
  private products: Products;
  constructor() {
    this.products = {};
  }
  // add: 마트에 추가
  add(product: Product) {
    if (this.products[product.name] === undefined) {
      this.products[product.name] = product.price;
      console.log(`${product.info()}을 추가하였습니다.`);
    }
  }
  // del: 마트에서 삭제
  del(product: Product) {
    if (this.products[product.name] !== undefined) {
      delete this.products[product.name];
      console.log(`${product.name}을 삭제하였습니다.`);
    } else {
      console.log(`[삭제 실패] 해당 제품(${product.name})이 없습니다.`);
    }
  }
  // update: 가격 변경
  update(product: Product) {
    if (this.products[product.name] !== undefined) {
      this.printPrice(product.name);
      this.products[product.name] = product.price;
      console.log(`${product.info()}로 변경하였습니다.`);
    } else {
      console.log(`[가격 변경 실패] 해당 제품(${product.name})이 없습니다.`);
    }
  }
  // printPrice: 가격 조회 
  private printPrice(productName: string) {
    if (this.products[productName] !== undefined) {
      console.log(`${productName}의 가격은 ${this.products[productName]}원 입니다.`);
    } else {
      console.log(`[조회 실패] 해당 제품(${productName})이 없습니다.`);
    }
  }
  // printAll: 모든 제품 조회 
  printAll() {
    console.log(this.products);
  }
}

class Product {
  constructor(
    public name: string,
    public price: number
  ) {}
  info() {
    return `${this.name}(${this.price}원)`;
  }
  printInfo() {
    console.log(this.info());
  }
  changePrice(price: number) {
    this.price = price;
  }
}

const oreo = new Product('오레오', 1500);
oreo.changePrice(2000);
oreo.printInfo();

const almond = new Product('아몬드', 1200);
const coke = new Product('코카콜라', 1000);
const meal = new Product('도시락', 6000);

const gs25 = new Mart();
gs25.add(oreo);
gs25.add(almond);
gs25.add(coke);
gs25.del(oreo);
gs25.del(meal);
gs25.printAll();

gs25.add(meal);
meal.changePrice(7000);
gs25.update(meal);
gs25.printAll();
