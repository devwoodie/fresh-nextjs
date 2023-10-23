import Image from "next/image";
import food from "/public/food0.png";

export default function Page() {

    let items: Array<string> = ['Tomato', 'Pasta', 'Coconut'];

    return (
        <div>
            <h4 className="title">Item List</h4>
            {items.map((item, idx) => (
                <div className="food" key={idx}>
                    <img src={`/food${idx}.png`} alt="img" className="food-img" />
                    <h4>{item} $40</h4>
                </div>
            ))}
        </div>
    )
}
