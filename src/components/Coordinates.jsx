import { useState } from "react";

const Coordinates = () => {
	const [loading, setLoading] = useState(true);

   const api = () =>{

   }

	return (
      <div>
         {loading ? <div>Loading</div> : ""}
      
      </div>
   )
};

export default Coordinates;
