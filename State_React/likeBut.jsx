import {useState} from "react";
export default function likeButton()
{
    function init()
    {
        console.log("init was executed");
        return math.random();
    }
    //let clicked=()=>{console.log("clicked button");};
//console.log("this is rerender before use state");
    let [isLiked,setLiked]=useState(false);
    let [clicks,setClicks]=useState(0);// here we can pass the functiin also let[clicks,setClicks]=useState(init());
    // but ham kya karate function ko parenthesis ke bsath nahi pass karate ham sirf use as a refference pass karate hai kyu ki hame function execute nahi karana hai 
    let[likes,setlikes]=useState(0);
    console.log("this is rerender after the state");
    console.log(`count= ${clicks}`);
    let toggleLiked =()=>{
        //let newVal=!isLike;// but isase kuch bhi change nahi ayega 
        setLiked(!isLiked);
        setClicks(clicks+1);
        //setlikes(likes+(isLiked?-1:+1));
        if(!isLiked)
        {
        //    setlikes(likes+1);
        //    setlikes(likes+1);
        //    setlikes(likes+1);
        //    setlikes(likes+1);
           // yaha pe hamane 10 bar bhi likha phir bhi ye count ek bar hi update hota hai toh ham kya  karate hai ki isako  callback ek form me likhate hai 
           setlikes((curcount)=>{
            return curcount+1;
           });

           setlikes((curcount)=>{
            return curcount+1;
           });
           
        }
        //setlikes{};
        //console.log(newVal); 
        console.log(isLiked);
        console.log("we are going to toggle");};

        let likeStyle={color:"red"};

        
      return(
        <div>
            <p onClick={toggleLiked}>
                {/* {isLiked} {ye jo hai na ye direcly nahi dikhai deta hai kyu ki boolian values directly dkhai nahi deti hai but ham isse string me convert karake displa kr sakate hia } */}
                {isLiked.toString()}
                {isLiked?(<i className="fa-solid fa-heart" style={likeStyle}></i>):
                (<i className="fa-regular fa-heart"></i>)}
            </p>
            <p>Clicks={clicks}</p>
            <p>Likes are increse by 2 as we use the callback ={likes}</p>
            {/* <p>Likes={clicks?setlikes(likes+1):""}</p> */}
            
        </div>
      );
}