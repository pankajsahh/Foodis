import React from 'react'
import './HomePage.css'
import FoodCard from '../../Components/FoodCard/FoodCard'
import Image1 from '../../Components/asset/Image1.png'
import Image2 from '../../Components/asset/Image2.png'
import Image3 from '../../Components/asset/Image3.png'
import Image4 from '../../Components/asset/Image4.png'
import Image5 from '../../Components/asset/Image5.png'
import ChefCard from '../../Components/ChefCard/ChefCard'
import Chefimg from '../../Components/asset/ChefImg.png'
import Chefimg2 from '../../Components/asset/chef2.png'
import Chefimg3 from '../../Components/asset/chef3.png'
import Food1 from '../../Components/asset/Food1.png'
import Food2 from '../../Components/asset/Food2.png'
import Food3  from '../../Components/asset/Food3.png'
import Food4 from '../../Components/asset/Food4.png'
export default function Homepage() {


  const FoodDataMenu = [
    {
      heading: "Pizza is a savory dish of Italian origin",
      img: Image1,
      width: "511.73px",
      height: "394.66px",
      ButtonBDR: true,
      DescBG: "#342679",
      text: "white",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
    },
    {
      img: Image2, heading: "Crispy French Fries",
      width: "351.73px",
      height: "200.66px",
      ButtonBDR: false,
      text: "black",
      DescBG: "#FFFFFF",
      desc: "Lorem Ipsum is simply dummy text "
    },
    {
      img: Image3,
      heading: "Doughnut",
      width: "351.73px",
      height: "200.66px",
      ButtonBDR: false,
      DescBG: "#FFFFFF",
      text: "black",
      desc: "Lorem Ipsum is si"
    },
    {
      img: Image4,
      heading: "Paneer Tikka",
      width: "351.73px",
      height: "200.66px",
      ButtonBDR: false,
      DescBG: "rgba(0, 0, 0, 0.8)",
      text: "white",
      desc: "Lorem Ipsum is simply dummy text of t."
    },
    {
      heading: "Macaroon",
      img: Image5,
      width: "351.73px",
      height: "200.66px",
      ButtonBDR: false,
      DescBG: "#FFFFFF",
      text: "black",
      desc: "Lorem Ipsum is simply dummy text."
    },

  ]



  return (

    <div className="FoodGrid mt-2">



      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className='FoodGridTitle mb-0'>V A R I E T I E S</p>
        <div className="underLine mb-3"></div>
      </div>
      <div className="MainFoodGrid d-flex justify-content-center gap-2 flex-wrap">
        <div className="Col">
          <FoodCard {...FoodDataMenu[0]} />
        </div>
        <div className="Col d-flex flex-column gap-2 flex-wrap">
          <div className="Row d-flex gap-2 flex-wrap ">
            <div className="Col "> <FoodCard {...FoodDataMenu[1]} /></div>
            <div className="Col "> <FoodCard {...FoodDataMenu[2]} /></div>
          </div>
          <div className="Row d-flex  gap-2 flex-wrap" >
            <div className="Col "> <FoodCard {...FoodDataMenu[3]} /></div>
            <div className="Col "> <FoodCard {...FoodDataMenu[4]} /></div>
          </div>
        </div>



      </div>



      <div className="Dishes d-flex justify-content-evenly my-5 m-4 gap-2">
        <div className="Dish ">
          <h5>Indian Cuisine</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis modi architecto nostrum esse similique.

          </p>
        </div>
        <div className="Dish">
          <h5>American Cuisine</h5><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis modi architecto nostrum esse similique id molestiae mollitia eius fuga quasi praesentium, ratione molestias. In natus iure autem asperiores nemo?
          </p>
        </div>
        <div className="Dish">
          <h5>Chinese Cuisine</h5><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis modi architecto nostrum

          </p>
        </div>
      </div>


      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className='FoodGridTitle mb-0'>T O P &nbsp;   C H E F S</p>
        <div className="underLine mb-3"></div>
      </div>



      <div className="TopChefsMemo d-flex justify-content-center gap-5 p-3">
        <ChefCard img={Chefimg2} name="Robert Downey Jr" desc="Executive Chef, USA" />
        <ChefCard img={Chefimg} name="Robert Downey Jr" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        <ChefCard img={Chefimg3} name="Robert Downey Jr" desc="Executive Chef, USA" />
      </div>

      <div className="FoodGuide p-5">
        <div className="d-flex py-4 flex-column align-items-center justify-content-center">
          <p className='FoodGridTitle mb-0'>F O O D &nbsp;   G U I D E </p>
          <div className="underLine mb-3"></div>
        </div>

        <div className="FoodGuideItems d-flex justify-content-between ">
          <div className="Row  d-flex justify-content-evenly gap-5 flex-column">
          <ChefCard FoodCard img={Food3} name="VEGETABLES" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          <ChefCard FoodCard img={Food2} name="FRUITS" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>
          <div className="Row d-flex justify-content-evenly gap-5 flex-column">
          <ChefCard FoodCard img={Food1} name="WHOLE GRAINS" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          <ChefCard FoodCard img={Food4} name="HEALTHY PROTEIN" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>
        </div>

      </div>

    </div>

  )
}
