"use client"
import { useEffect } from "react";
import Card from "../Card";
import { placesPage, getPlaces } from "./data";

export default function PlacesPage() {
  useEffect(()=>{
    const teste = async()=>{
      const places = await getPlaces()
      console.log(places)
    }

    
  },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {placesPage.map((place) => (
        <Card key={place.title} {...place} />
      ))}
    </div>
  );
}
