class Punto {
  static crearPunto(x, y) {
    let punto = new Punto();
    punto.x = x;
    punto.y = y;
    return punto;
  }

  suma(punto) {
    let sumaX = this.x + punto.x;
   let sumaY = this.y + punto.y;
    return Punto.crearPunto(sumaX, sumaY);
  }

  toString() {
    return `(${this.x},${this.y})`;
  }
}

let p1 = Punto.crearPunto(1, 2);
let p2 = Punto.crearPunto(2, 3);

console.log(p1.suma(p2).toString());