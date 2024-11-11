import React , {useState } from 'react'
import De from './assets/images/Dé.PNG'
import face1 from './assets/images/face1.PNG'
import face2 from './assets/images/face2.PNG' 
import face3 from './assets/images/face3.PNG'
import face4 from './assets/images/face4.PNG'
import face5 from './assets/images/face5.PNG'
import face6 from './assets/images/face6.PNG'

export default function JeuxDe({valeur , test , settest , val}) {
    const [numbre , setNumber] = useState(null)
    const [numbreEssai , setNumberEssai] = useState(0)
    const [images , setImages] = useState([face1,face2,face3,face4,face5,face6])
    const [face , setFace] = useState(null)
    const  [gane , setgange] = useState(false)
    const HandleClick = ()=>{
        const newNumber = Math.floor(Math.random()*6)+1;
        setNumber(newNumber);
        setFace(images[newNumber-1]);
        if (newNumber !== valeur) {
            setNumberEssai(numbreEssai+1);
        } else {
            setgange(true);
        }   

    }
    const reset = ()=>{
        setNumber(null)
        setNumberEssai(0)
        setgange(false) 
        settest(false)

    }
     
  return (
    <div>
        <h1>jouer jusque {val}</h1>
        <img src={De} width={200}/>
         <br />
        Jeu de Dé <br />
        face : {numbre} <br />
        <img src={face} /> <br></br>
        Nombre d'essai : {numbreEssai} <br />   
        {gane ? <p>Bravo !</p> : null}
        { gane ? <button onClick={reset}>Rejouer</button> : <button onClick={HandleClick}>Jouer</button>}
    </div>
  )
}

// import De from './assets/images/Dé.PNG'
// import face1 from './assets/images/face1.PNG'
// import face2 from './assets/images/face2.PNG' 
// import face3 from './assets/images/face3.PNG'
// import face4 from './assets/images/face4.PNG'
// import face5 from './assets/images/face5.PNG'
// import face6 from './assets/images/face6.PNG'
// import React from "react";


// export default class JeuxDeClass extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             nombre : null,
//             nombreEssai : 0,
//             images : [face1,face2,face3,face4,face5,face6],
//             face : null,
//             gane : false
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.reset = this.reset.bind(this);
//     }
//     handleClick(){
//         const newNumber = Math.floor(Math.random()*6)+1;
//         this.setState({
//             nombre : newNumber,
//             face : this.state.images[newNumber-1],
//         });
//         if (newNumber !== this.props.valeur) {
//             this.setState({
//                 nombreEssai : this.state.nombreEssai+1,
//             });
//         } else {
//             this.setState({
//                 gane : true,
//             });
//         }   
//     }
//     reset(){
//         this.setState({
//             nombre : null,
//             nombreEssai : 0,
//             gane : false
//         });
//     }
//     //
//     render(){
//         return (
//             <div>
//                 <img src={De} width={200}/>
//                  <br />
//                 Jeu de Dé <br />
//                 face : {this.state.nombre} <br />
//                 <img src={this.state.face} /> <br></br>
//                 Nombre d'essai : {this.state.nombreEssai} <br />   
//                 {this.state.gane ? <p>Bravo !</p> : null}
//                 { this.state.gane ? <button onClick={this.reset}>Rejouer</button> : <button onClick={this.handleClick}>Jouer</button>}
//             </div>
//         );
//     }
     
// }

