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
            img: "https://unsplash.it/400/500?random",
            name: "Item 1",
            category: "photo",
            price: 4,
            id: "1",
            colors: []
          },
         {
            img: "https://unsplash.it/500/500?random",
            name: "Item 2",
            category: "photo",
            price: 4,
            id: "2",
            colors: []
          },
         {
            img: "https://unsplash.it/500/400?random",
            name: "Item 3",
            category: "photo",
            price: 4,
            id: "3",
            colors: []
          },
         {
            img: "https://unsplash.it/500/300?random",
            name: "Item 4",
            category: "photo",
            price: 3,
            id: "4",
            colors: []
          },  
          {
            img: "https://drawinghowtos.com/wp-content/uploads/2019/11/unicorn-colored.png",
            name: "Licorne",
            category: "girly",
            price: 5,
            id: "5",
            colors: []
          },
         {
            img: "./assets/illustration/butterflyBlue.png",
            name: "Papillon",
            category: "girly",
            price: 2,
            id: "6",
            colors: [
              {
                img: "./assets/illustration/butterflyBlue.png",
                color: "00BFFF",
              },
              {
                img: "./assets/illustration/butterflyBw.jpg",
                color: "000000",
              },
              {
                img: "./assets/illustration/butterflyYellow.png",
                color: "FFD700",
              }
            ]
          },
         {
            img: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/12597.png",
            name: "Fleur de cerisier",
            category: "girly",
            price: 5,
            id: "7",
            colors: []
          },
          {
            img: "https://isometric.online/wp-content/uploads/2020/05/people_svg.svg",
            name: "People",
            category: "illu",
            price: 5,
            id: "8",
            colors: []
          },
         {
            img: "https://isometric.online/wp-content/uploads/2020/04/fitness_svg.svg",
            name: "Fitness",
            category: "illu",
            price: 4,
            id: "9",
            colors: []
          },
         {
            img: "https://isometric.online/wp-content/uploads/2020/04/instagram_svg.svg",
            name: "Instagram",
            category: "illu",
            price: 5,
            id: "10",
            colors: []
          },
         {
            img: "https://isometric.online/wp-content/uploads/2020/04/tv_svg.svg",
            name: "Télévision",
            category: "illu",
            price: 3,
            id: "11",
            colors: []
          }
    ];
    
    public getByCategory(category) {
        return this.lib.filter(img => img.category === category)
    }
    public getById(id) {
        console.log('id', id)
        return this.lib.find(img => img.id === id)
    }
}
