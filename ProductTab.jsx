//import { Linter } from "eslint";
import Product from "./product.jsx";

function ProductTab()
{
    let Options=["high tech","durable","available","military grading","fast","reliable"];
    let Options2={a:"high take",b:"durable",c:"fast",d:"reliable"};
    let Options3=[<li>valuable</li>,<li>better than other</li>,<li>compatible</li>];
    console.log(Options);
    return (
        //Features={Options} Features2={Options2}
        //Features={Options=["new","high processing"]}
        //Features={Options3}
        <>
        <Product title="laptop" description="this is a coding laptop" price={30000} /> 
        <Product title="Phone" description=" this is my phone" price={973}  />
        <Product title="Tab" description="this is tab fr the treding" price={60840} />
        </>
    );
}

export default ProductTab;