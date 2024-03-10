import React, { useState } from "react";
import Navbar from "../../components/group/Navbar/Navbar";
import Card from "@/components/common/Card/Card";
import Badge from "@/components/common/Badge/Badge";
import { NavLink } from "react-router-dom";
import Dropdown from "@/components/common/Dropdown/Dropdown";
function Subject() {
  const [courses, getCourses] = useState(
    {
      lista: [
        {
          id: 10,
          naziv: "Metali",
          predmetId: 6,
          predmet: {
            id: 6,
            naziv: "Hemija"
          }
        },
    {
      "id": 10,
      "naziv": "Metali",
      "predmetId": 6,
      "predmet": {
        "id": 6,
        "naziv": "Hemija"
      }
    },
    {
      "id": 11,
      "naziv": "Biljke",
      "predmetId": 7,
      "predmet": {
        "id": 7,
        "naziv": "Biologija"
      }
    },
    {
      "id": 12,
      "naziv": "Gravitacija",
      "predmetId": 8,
      "predmet": {
        "id": 8,
        "naziv": "Fizika"
      }
    },
    {
      "id": 13,
      "naziv": "Programiranje",
      "predmetId": 9,
      "predmet": {
        "id": 9,
        "naziv": "Informatika"
      }
    },
    {
      "id": 14,
      "naziv": "Ratovi",
      "predmetId": 10,
      "predmet": {
        "id": 10,
        "naziv": "Historija"
      }
    }
      ]
    },
  );
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
    <div className="flex flex-col w-4/5 m-auto">
      <div className="flex mx-auto my-10 flex-col md:flex-row justify-center items-center gap-20">
        <div className="flex items-center gap-2">
      <h3 className="text-neutral-700 md:text-2xl font-bold font-['Montserrat'] shadow-sm">Razred: </h3>
      <Dropdown options={razredi}></Dropdown>
        </div>
        <div className="flex items-center gap-2">
      <h3 className="text-neutral-700 md:text-2xl font-bold font-['Montserrat']">Predmet: </h3>
      <Dropdown options={predmeti}></Dropdown>
        </div>
      </div>
    <Card>
     <div className="flex flex-col ">
      {courses.lista.map((obj,key):any=>
      <>
      <NavLink key={key} className=" text-left flex items-center gap-2 text-xl border-l-2 p-16 h-full border-black m-4 cursor-pointer  shadow-sm" to="/lectures/5">
        
      <div className="text-center ml-4 bg-white rounded-full h-4 w-4 border-black border-1"></div>{obj?.naziv}</NavLink>
     
      </>
      )}
     </div>
    </Card>
    </div>
    </>;
}

export default Subject;
