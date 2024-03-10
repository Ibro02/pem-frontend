import Card from "@/components/common/Card/Card";
import Navbar from "@/components/group/Navbar/Navbar";
import { useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Lecture() {

  const handleClick = (id:number) => {
    const inputElement = document.getElementById(id.toString());
    if (inputElement) {
      inputElement.click();
    }
  };

  useEffect(()=>
  {
if (personality == null)
window.location.href = "/settings"
  },[])

  let personality = useAppSelector(state=>state.personalityReducer.personality);

    let {id} = useParams();
  return <>
  <Navbar/>
  {/* VIZUELNI TIP LJUDI */}

  {personality == "Vizuelni"&&<div className="flex h-full w-3/4 justify-center items-center m-auto">
    <Card>
        <img className="rounded-xl" src="https://aul.edu.ng/static/images/reviews/chemistryedu.jpg" alt="" />
        <h1 className="m-8 text-2xl font-bold text-left">Naziv ilustracije</h1>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, eos! Ad eligendi, possimus neque, assumenda quas recusandae a deserunt nemo esse perspiciatis consequuntur, excepturi veniam nulla nobis voluptate ducimus repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos reprehenderit ad quae tempore aperiam nisi ducimus, accusamus alias earum cum molestiae nemo quo iusto aliquid, temporibus illo delectus aspernatur!</p>
    </Card>
  </div>}
{/* KINESTETICKI */}
  {personality == "Kinestetički" && <div className="flex h-full w-3/4 justify-center items-center m-auto">
    <Card>
      <h1 className="flex justify-start text-gray-500">Pitanje 1 od 10</h1>
        <h1 className="m-8 text-xl font-bold text-left">Koja od sljedećih tvrdnji o fotosintezi je ispravna?</h1>
        <form className="flex flex-col items-start my-5">
      <div className="flex flex-row-reverse gap-2">
        <span onClick={() => handleClick(0)}>Fotosinteza je proces kojim biljke proizvode kiseonik.</span>
        <input type="checkbox" name="question1" id="0" />
      </div>
      <div className="flex flex-row-reverse gap-2">
        <span onClick={() => handleClick(1)}>Fotosinteza se odvija u stromi mitohondrija.</span>
        <input type="checkbox" name="question2" id="1" />
      </div>
      <div className="flex flex-row-reverse gap-2">
        <span onClick={() => handleClick(2)}>U fotosintezi se koristi samo voda kao izvor energije.</span>
        <input type="checkbox" name="question3" id="2" />
      </div>
      <div className="flex flex-row-reverse gap-2">
        <span onClick={() => handleClick(2)}>Glavni produkt fotosinteze je glukoza.</span>
        <input type="checkbox" name="question3" id="2" />
      </div>
    </form>
<div className="flex justify-around">
<button className="text-gray-600">{"nazad << "}</button>
<button className="text-gray-600">{" >> naprijed"}</button>
</div>

    </Card>
  </div> }
{/* AUDATIVNI */}
{personality == "Audativni" && 
<div className="flex h-full w-full flex-wrap flex-row justify-center items-center m-auto">
    <Card>
      <h1 className="text-3xl font-bold">Fotosinteza</h1>
      <div className="d-grid grid-cols-2 gap-8 w-full m-auto">
      <div className="flex flex-wrap justify-between ratio w-96 ratio-16x9 m-auto">
      <iframe src="https://www.youtube.com/embed/CMiPYHNNg28" title="Rick Astley - Never Gonna Give You Up (Official Music Video)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <h1>Naslov</h1>
        </div>
        <div className="flex ratio ratio-16x9 m-auto">
      <iframe src="https://www.youtube.com/embed/sQK3Yr4Sc_k" title="Rick Astley - Never Gonna Give You Up (Official Music Video)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <h1>Naslov</h1>
        </div>
        <div className="flex ratio ratio-16x9 m-auto">
      <iframe src="https://www.youtube.com/embed/00jbG_cfGuQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <h1>Naslov</h1>
        </div>
      <div className="flex ratio ratio-16x9 m-auto">
      <iframe src="https://www.youtube.com/embed/jtnVa85EDmI" title="Rick Astley - Never Gonna Give You Up (Official Music Video)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <h1>Naslov</h1>
      </div>
      </div>
<div className="flex justify-around">

</div>
    </Card>
  </div>
    }
  </>;
}

export default Lecture;
