"use client";
import cards from "./../projectectdata/data" 
import React from "react";
import { LayoutGrid } from "./layout-grid";
import Projectheader from "./Projectheader";
const Project = () => {  
  return (
    <div className="min-h-screen bg-black-100 p-10">
      <Projectheader/>
      <LayoutGrid cards={cards} />
    </div>
  );
};

export default Project;
