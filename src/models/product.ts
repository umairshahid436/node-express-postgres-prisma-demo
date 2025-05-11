import { db } from "../utils/db";
import { Product as ProductType } from "../types/product";
export class Product {
  _product: ProductType;

  constructor(product: ProductType) {
    this._product = product;
  }

  save() {
    return db.product.create({
      data: {
        description: this._product.description,
        name: this._product.name,
        price: this._product.price,
        quantity: this._product.quantity,
        categoryId: this._product.categoryId,
      },
    });
  }
  update() {
    return db.product.update({
      where: { id: this._product.id },
      data: {
        description: this._product.description,
        name: this._product.name,
        price: this._product.price,
        quantity: this._product.quantity,
        categoryId: this._product.categoryId,
      },
    });
  }
  static find() {
    return db.product.findMany({
      include: { category: true },
    });
  }
  static findById(id: number) {
    return db.product.findUnique({
      where: { id },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }
  static delete(id: number) {
    return db.product.delete({ where: { id } });
  }
}
