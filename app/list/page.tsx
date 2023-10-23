"use client"

import {useState} from "react";

export default function Page() {

    let items: Array<string> = ['Tomato', 'Pasta', 'Coconut'];
    const [num, setNum] = useState<number[]>([0, 0, 0]);

    const handlePlus = (idx: number) => {
        let copy: number[] = [...num];
        copy[idx]++;
        return setNum(copy);
    }
    const handleMinus = (idx: number) => {
        let copy: number[] = [...num];
        if(copy[idx] > 0){
            copy[idx]--;
            return setNum(copy);
        }else {
            return 0
        }
    }

    return (
        <div>
            <h4 className="title">Item List</h4>
            {items.map((item, idx) => (
                <div className="food" key={idx}>
                    <img src={`/food${idx}.png`} alt="img" className="food-img" />
                    <h4>{item} $40</h4>
                    <span>{num[idx]}</span>
                    <button onClick={() => handlePlus(idx)}>+</button>
                    <button onClick={() => handleMinus(idx)}>-</button>
                </div>
            ))}
        </div>
    )
}
