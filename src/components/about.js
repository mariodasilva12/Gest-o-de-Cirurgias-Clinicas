

import { useState } from "react";

function About(){

    const [name, setName] = useState();
    return(
        <div>
           <p>Nova página About</p>
          <input type='text'
          id='name'
          name='name'
          placeholder="Digite seu Nome" 
          onChange={(e)=>setName(e.target.value)}
          />
          {name}
        </div>
    )
}

export default About;