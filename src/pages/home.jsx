import List from "../components/list/list.js";
import Header from "../components/header/header.jsx";
import Add from "../components/Addbanner/addbanner.js";
import Cat from "../components/catogires/cate.js";
import Mobilephones from "../components/cardheading/mobilephones.js";
import Car from "../components/cars/car.js"

function Home() {
  return (
    <>
      <Header />
      <List />
      <Add />
      <Cat />
      <Mobilephones />    
      <Car />
    {/* <div>
      <Cars />
    </div> */}
    {/* <Login />
    <Signup /> */}
    </>
  );
}

export default Home;
