import React, { useEffect, useState } from "react";
import Navbar from "../../components/group/Navbar/Navbar";
import Card from "../../components/common/Card/Card";
import Dropdown from "../../components/common/Dropdown/Dropdown"
import { KorisnikLoginService } from "@/api/services/KorisnikLogin";
import Button from "@/components/common/Button/Button";
import { Navigate } from "react-router-dom";
function Home() {
const [isGenerated, generate] = useState(false);

useEffect(()=>
{
if (isGenerated)
window.location.href = "/lectures/5"
},[isGenerated])

  const razredi = [
    { value: 'option1', label: 'I RAZRED' },
    { value: 'option2', label: 'II RAZRED' },
    { value: 'option3', label: 'III RAZRED' },
    { value: 'option4', label: 'IV RAZRED' },
  ];
  const predmeti = [
    { value: 'option1', label: 'MATEMATIKA' },
    { value: 'option2', label: 'GEOGRAFIJA' },
    { value: 'option3', label: 'HISTORIJA' },
    { value: 'option4', label: 'BOSANSKI' },
  ];
  return <>
    <Navbar/>
  <div className="h-full flex flex-col ">
  <div className="w-2/3 mx-auto my-auto px-0">
    <Card >
      <div className="flex flex-col gap-7">
      <p className="text-2xl text-left">Za generisanje materijala prilagođenim metodama, molimo vas da popunite 
formu ispod:</p>
     <div className="flex left-0 text-left gap-9">
      <div className="">
      <h1>Razred: </h1>
      <Dropdown options={razredi}/>
      </div>
      <div className="">
      <h1>Predmet: </h1>
      <Dropdown options={predmeti}/>
      </div>
     </div>
      <Button onClick={()=>generate(true)}>Generiši</Button>
      </div>
    </Card>
  </div>
  </div></>
}

export default Home;
