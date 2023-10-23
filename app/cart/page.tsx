import age from "./data"

export default function Cart() {

    let cartList: Array<string> = ["Tomato", "Pasta"];

    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem item={cartList[0]} />
            <CartItem item={cartList[1]} />
            <Banner />
        </div>
    )
}

function Banner(){
    return <h5>현대카드 결제 행사 중</h5>
}

function CartItem(props: any){
    return(
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}
