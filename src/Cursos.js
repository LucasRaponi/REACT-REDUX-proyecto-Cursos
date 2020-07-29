import React from "react";
import { connect } from "react-redux";
import "./Item.css";


const Cursos = ({cursos, Positivo,Negativo, filtered }) => {
    return (
      

   cursos.map(c => (
     <div className="item" key={c.id}>

  
       
       
      <div className="image">   <img src={c.img} width="100%" alt={c.nombre}/>     </div>
    <div className="title">      <h2> {c.nombre} </h2>    </div>
    <div className="rating">
                        


      <h4> {c.descripcion} </h4>

      Calificación:
      <div>

      <input type="image" className="manitos" alt="" src={c.GoodImage} onClick={() => Positivo(c)}/>
      <input type="image" className="manitos" alt= "" src={c.badImage} onClick={() => Negativo(c)}/>
      
      </div>

      <div>
      <h5 className="GoodAndBad"> {c.opinion} </h5>
      </div>


      </div>


      <div className="actions">

      

      </div>

   </div>

       


   )))}

  
   



const mapStateToProps = state => ({
    cursos: state.filtered /* le estoy diciendo que la palabra cursos es la state de filtered 
                                osea que cuando yo diga "cursos" me estoy refiriendo a los cursos 
                                dentro de filtered*/
  })
  
const mapDispatchToProps = dispatch => ({

  

  
  Positivo(curso) {
    dispatch({
      type: "POSITIVO",
      curso
    })},

    Negativo(curso) {
      dispatch({
        type: "NEGATIVO",
        curso
      })},


})

export default connect(mapStateToProps, mapDispatchToProps) (Cursos)