// code from> https://github.com/codegenixdev/3d-parallax-tutorial/tree/main
// video tutorial> https://www.youtube.com/watch?v=Nup-JM3GBxA

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./UI/3d-parallax/3d-parallax"
import { product } from "./UI/3d-parallax/data.json"
export default function ParallaxEffect(){
    return (
        
            <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ba78bd] to-[#613177]">
              <CardContainer className="inter-var">
                <CardBody className="group/card flex flex-col gap-5 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ba78bd] to-[#613177] p-6 hover:shadow-lg">
                  <CardItem 
                  translateZ={150}
                  className="mt-4 w-full">
                    <img
                      src={product.src}
                      className="h-60 w-full rounded-xl object-contain drop-shadow-lg group-hover/card:drop-shadow-xl"
                      alt={product.title}
                    />
                  </CardItem>
        
                  <CardItem 
                  translateZ={50}
                  className="text-5xl font-bold text-gray-50">
                    {product.title}
                  </CardItem>
        
                  <CardItem
                  translateZ={50}
                    className="mt-2 max-w-sm text-xl font-semibold text-[#ffdb78]"
                    component="p"
                  >
                    {product.description}
                  </CardItem>
                  <div className="mt-20 flex w-full items-center justify-between">
                    <CardItem
                    
                      component="a"
                      href="/"
                      className="rounded-xl px-4 text-lg font-normal dark:text-white"
                    >
                      Share
                    </CardItem>
                    <CardItem 
                    className="self-start text-xl text-[#ffdb78]">
                      
                      {product.price}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          );
    
}