import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  dDetails = [
    {
      id:1,
      foodName:"Sanduíche Grelhado Paneer",
      foodDetails:"masala paneer frito",
      foodPrice:32,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Cebola | Capsicum Verde | Cogumelo | azeitonas pretas, milho doce, pimentão vermelho coberto com queijo",
      foodPrice:38,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:25,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"Uma mistura caseira de purê de batata e legumes, temperada com especiarias indianas. Um recheio que certamente o levará de volta à cozinha da mãe.",
      foodPrice:62,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Sem ovos) Delicie-se com brownie de chocolate ricamente decadente feito com amor e coberto com chocolate amargo-doce que proporciona uma experiência de chocolate ultra-rica.",
      foodPrice:15,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Sorvete de Cheesecake Oreo",
      foodDetails:"Sorvete de Oreo",
      foodPrice:18,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]
}
