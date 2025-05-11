import { db } from "../utils/db";

export class Category {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  save() {
    return db.category.create({
      data: {
        name: this.name,
      },
    });
  }
  static update(id: number, name: string) {
    return db.category.update({
      where: { id },
      data: { name },
    });
  }
  static find() {
    return db.category.findMany();
  }
  static findById(id: number) {
    return db.category.findUnique({ where: { id } });
  }
  static delete(id: number) {
    return db.category.delete({ where: { id } });
  }
}
