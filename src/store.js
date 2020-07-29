import { createStore } from "redux"





const initialState = {
    cursos: 
    [
        {
        nombre: "Fazt",
        img: "https://3.bp.blogspot.com/-JjdknIsDwvw/WhCqjASEGeI/AAAAAAAABCc/ivhIALZGa6QCNJrfG29Zy51gogbaKUIuACLcBGAs/w1200-h630-p-k-no-nu/faazt_v3.png",
        descripcion: "lorem lorem lorem lorem",
        id: "1",
        opinion: "",
        badImage: "https://images.emojiterra.com/google/android-pie/512px/1f44e.png",
        GoodImage: "https://images.emojiterra.com/google/android-nougat/512px/1f44d.png"
        },

        {
            nombre: "Codigo facilito",
            img: "https://codigofacilito.com/assets/coco-c34f9bd7a9957f97136b9c10df6b9f357d7d1f2113dd07648847cc26b3c5958a.png",
            descripcion: "lorem lorem lorem lorem",
            id: "2",
            opinion: "",
            badImage: "https://images.emojiterra.com/google/android-pie/512px/1f44e.png",
        GoodImage: "https://images.emojiterra.com/google/android-nougat/512px/1f44d.png"
        },

        {
            nombre: "FreeCode Camp",
            img: "https://yt3.ggpht.com/a/AATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ=s176-c-k-c0x00ffffff-no-rj-mo",
            descripcion: "lorem lorem lorem lorem",
            id: "3",
            opinion: "",
            badImage: "https://images.emojiterra.com/google/android-pie/512px/1f44e.png",
        GoodImage: "https://images.emojiterra.com/google/android-nougat/512px/1f44d.png"
            
        },

    ],
filtered: [
    {
        nombre: "Fazt",
        img: "https://3.bp.blogspot.com/-JjdknIsDwvw/WhCqjASEGeI/AAAAAAAABCc/ivhIALZGa6QCNJrfG29Zy51gogbaKUIuACLcBGAs/w1200-h630-p-k-no-nu/faazt_v3.png",
        descripcion: "lorem lorem lorem lorem",
        id: "1",
        opinion: "",
        badImage: "https://images.emojiterra.com/google/android-pie/512px/1f44e.png",
        GoodImage: "https://images.emojiterra.com/google/android-nougat/512px/1f44d.png"
        },

        {
            nombre: "Codigo facilito",
            img: "https://codigofacilito.com/assets/coco-c34f9bd7a9957f97136b9c10df6b9f357d7d1f2113dd07648847cc26b3c5958a.png",
            descripcion: "lorem lorem lorem lorem",
            id: "2",
            opinion: "",
            badImage: "https://images.emojiterra.com/google/android-pie/512px/1f44e.png",
        GoodImage: "https://images.emojiterra.com/google/android-nougat/512px/1f44d.png"
        },

        {
            nombre: "FreeCode Camp",
            img: "https://yt3.ggpht.com/a/AATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ=s176-c-k-c0x00ffffff-no-rj-mo",
            descripcion: "lorem lorem lorem lorem",
            id: "3",
            opinion: "",
            badImage: "https://images.emojiterra.com/google/android-pie/512px/1f44e.png",
        GoodImage: "https://images.emojiterra.com/google/android-nougat/512px/1f44d.png"
            
        },
]}
    /* filtered es el original y cursos es la copia porque redux es imnutable y lo que se modifica
    son las copias con las que trabajas*/
    
    const filterCourse = (nombre, state) => {
        console.log(nombre);
        
        if (nombre.length < 1) return { ...state, filtered: state.cursos }; /* le estoy diciendo
                                                                            que solo si la longitud
                                                                            del nombre es menor a 1 
                                                                            entonces me retorne la state
                                                                            tal cual esta y que
                                                                            en "filtered" filtre
                                                                            los cursos y solo queden
                                                                            los que tengan nombres
                                                                            iguales */
        return {
          ...state,
          filtered: state.cursos.filter(c => c.nombre.includes(nombre))
        };
        

        
      };





    const POSITIVO = (state=initialState, action) => {
        console.log(action);



        const {curso} = action;
        curso.opinion = "Te gusta este curso :D";
        const filtered = state.filtered.map(c => c.id === curso.id ? curso : c);
        return {...state, filtered};
        
        }





        const NEGATIVO = (state=initialState, action) => {
            console.log(action);
    
    
    
            const {curso} = action;
            curso.opinion = "No te gusta este curso :_";
            const filtered = state.filtered.map(c => c.id === curso.id ? curso : c);
            return {...state, filtered};
            
            }





    const reducerYouCourse = (state=initialState, action) => {
        console.log(action);

        switch (action.type) {
            case "POSITIVO":
                return POSITIVO(state, action)

                case "NEGATIVO":
                return NEGATIVO(state, action)

                
                case "FILTER":
                return filterCourse(action.payload, state);

                default: return state
        }
       

      
        }

      
                                    
                
             
                

            
        


        
        

        
        
        




        
    



    export default createStore(reducerYouCourse)
