import Card from "../Card"
import { places } from "./data"

export default function Places(){
return (
    <div className="flex flex-col gap-4">
        {places.map(place => (
            <Card key={place.title} {...place}/>
        ))}
    </div>
)
}