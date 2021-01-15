import { Injectable } from '@angular/core';

export interface Image {
    img: string;
    name: string;
    category: string;
    id: string;
    price: number;
    colors: Array<ImageVariant>;
}
export interface ImageVariant {
    img: string;
    color: string;
}

@Injectable()
export class AssetsLibService {
    constructor() { }
    public lib: Image[] = [ 
          {
            img: "./assets/illustration/peperoni.png",
            name: "Peperoni",
            category: "food",
            price: 5,
            id: "1",
            colors: []
          },
          {
            img: "./assets/illustration/popcorn.png",
            name: "Popcorn",
            category: "food",
            price: 5,
            id: "2",
            colors: []
          },
          {
            img: "./assets/illustration/waleFront.png",
            name: "Baleine",
            category: "girly",
            price: 5,
            id: "3",
            colors: []
          },
          {
            img: "./assets/illustration/waleback.png",
            name: "Baleine",
            category: "girly",
            price: 5,
            id: "4",
            colors: []
          },
          {
            img: "./assets/illustration/cherry.png",
            name: "Cerises",
            category: "food",
            price: 5,
            id: "5",
            colors: []
          },
          {
            img: "./assets/illustration/roses.png",
            name: "Roses",
            category: "girly",
            price: 5,
            id: "6",
            colors: []
          },
         {
            img: "./assets/illustration/papBlue.png",
            name: "Papillon",
            category: "girly",
            price: 2,
            id: "7",
            colors: [
              {
                img: "./assets/illustration/papBlue.png",
                color: "00BFFF",
              },
              {
                img: "./assets/illustration/papGreen.png",
                color: "35D24D",
              },
              {
                img: "./assets/illustration/papOrange.png",
                color: "E78D00",
              },
              {
                img: "./assets/illustration/papRed.png",
                color: "E71D0A",
              },
              {
                img: "./assets/illustration/papPink.png",
                color: "FD4B8E",
              }
            ]
          },
         {
            img: "./assets/illustration/sakuraPink.png",
            name: "Fleur de cerisier",
            category: "girly",
            price: 5,
            id: "8",
            colors: [
              {
                img: "./assets/illustration/sakuraBlue.png",
                color: "00BFFF",
              },
              {
                img: "./assets/illustration/sakuraPink.png",
                color: "FD4B8E",
              }
            ]
          },
         {
            img: "./assets/illustration/donutPink.png",
            name: "Donuts",
            category: "food",
            price: 5,
            id: "9",
            colors: [
              {
                img: "./assets/illustration/donutPink.png",
                color: "FD4B8E",
              },
              {
                img: "./assets/illustration/donutGreen.png",
                color: "35D24D",
              }
            ]
          },
         {
            img: "./assets/illustration/blueAbstract1.png",
            name: "Abstrait 1",
            category: "abstract",
            price: 5,
            id: "10",
            colors: [
              {
                img: "./assets/illustration/blueAbstract1.png",
                color: "00BFFF",
              },
              {
                img: "./assets/illustration/greenAbstract1.png",
                color: "35D24D",
              },
              {
                img: "./assets/illustration/orangeAbstract1.png",
                color: "E78D00",
              },
              {
                img: "./assets/illustration/redAbstract1.png",
                color: "E71D0A",
              },
              {
                img: "./assets/illustration/pinkAbstract1.png",
                color: "FD4B8E",
              },
              // {
              //   img: "./assets/illustration/blackAbstract1.png",
              //   color: "000000",
              // }
            ]
          },
         {
            img: "./assets/illustration/blackSplash.png",
            name: "Splash",
            category: "abstract",
            price: 5,
            id: "11",
            colors: [
              {
                img: "./assets/illustration/blueSplash.png",
                color: "00BFFF",
              },
              {
                img: "./assets/illustration/greenSplash.png",
                color: "35D24D",
              },
              {
                img: "./assets/illustration/orangeSplash.png",
                color: "E78D00",
              },
              {
                img: "./assets/illustration/redSplash.png",
                color: "E71D0A",
              },
              {
                img: "./assets/illustration/pinkSplash.png",
                color: "FD4B8E",
              },
              {
                img: "./assets/illustration/blackSplash.png",
                color: "000000",
              }
            ]
          },
          {
            img: "./assets/illustration/liberty1.png",
            name: "Liberty 1",
            category: "pattern",
            price: 5,
            id: "12",
            colors: []
          },
          {
            img: "./assets/illustration/dalmatien.png",
            name: "Dalmatien",
            category: "pattern",
            price: 5,
            id: "13",
            colors: []
          },
    ];
    
    public getByCategory(category) {
        return this.lib.filter(img => img.category === category)
    }
    public getById(id) {
        return this.lib.find(img => img.id === id)
    }
}
