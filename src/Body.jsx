import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";

function Body() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
         setItems(res.data.meals); // Update state with res.data.meals
      })
      .catch((err) => {
         if (err.response) {
            // The request was made, but the server responded with a status code other than 2xx.
            console.error("Server responded with error status:", err.response.status);
         } else if (err.request) {
            // The request was made, but no response was received.
            console.error("No response received from the server.");
         } else {
            // Something else went wrong.
            console.error("Error:", err.message);
         }
      });
   }, []);


   const itemList = items.map((obj) => (
      <div className="col-md-4" key={ obj.idMeal }>
         <p>{ obj.strMeal } </p>
         <img src={ obj.strMealThumb } alt={ obj.strMeal } className="img-fluid" />
         <p>{ obj.idMeal } ₹</p>
      </div>
   ));

   return (
      <div className="row">
         { itemList }
      </div>
   );
}

export default Body;
