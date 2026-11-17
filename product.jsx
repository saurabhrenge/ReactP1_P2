import "./Product.css";
function Product({title,description,price})//here we can write function Product({title,description})  //console.log(Props.title,Props.Description,Features,Features2);
{//Features,Features2,Features3 // price=300000(this is an default price)
   // je an component use madhe nahit te highlight nahi disat'

//    if(price>3000){
// return (
//         <div className="product">
//             <h3>{title}</h3> 
//             <h6>Price:{price}</h6>
//             <p>Discount of 5%</p>
//         </div>
//     );
//    }else{
//     return (
//         <div className="product">
//             <h3>{title}</h3> 
//             <h6>Price:{price}</h6>
//         </div>);
//    }    ( writing and repeating this we create the variable and only call the variable )

// isDiscount=price>3000?"Discount : 5%":""; ( but agar ham aisa karate hai toh hamare isame kya hota hai ki ek naya element niche create hta hai toh aise nahi chhaiye is liye ham kya karate hai ki usake condition ke andar <p> </p> tahg ko likhate hai matalb jab conditin true hogi tabhi vo P tag create hoga )
//{ price>3000?<p>"Discount : 5% "</p>:null}  ye tarika hota hai conditional ko likhane ka 
// this is also one way 
/// { price>3000?<p>"Discount : 5% "</p>:<a href="https://google.com">Get Discount</a>}
let isDiscount=price>3000;
let styles={backgroundColor:price>3000?"yellow":""}; // abhi yaha pe jo hai hame bar bar price  ki condition likhani pad rahi hai , toh hma kya karenge usako ek isDiscount me assign kr denge 
// and the above line become ,, let styles={backgroundColor:isDicount?"yellow":""}; 
return (
        <div className="product" style={styles}>
            <h3>{title}</h3> 
            <h6>Price:{price}</h6>
            { price>3000 && <p>"Discount : 5% "</p>}
        </div>
        );
    
}

export default Product;