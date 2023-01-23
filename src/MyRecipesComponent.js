

function MyRecipesComponent({propsLabel, propsCuisineType,propsImage,propsIngredients, propsCalories}){
    return(
    <div  className="wrapper">
            <div className="container">
                   <h2>{propsLabel}</h2>
            </div>

            <div className="container">
            <p className="sub_title">{propsCuisineType}</p>
            </div>
        
             <div className="main_container">
                    <div className="img_container">
                            <img className="main_picture" src = {propsImage} alt="recipe"/>
                    </div>  

                <div className="list_container">
                     <ul className="list">
                         {propsIngredients.map((item,index)=>(
                        <li key={index}>            
                         {item}
                        </li>
                        ))} 
                    </ul>
                     <div  className="container"> 
                        <p className="sub_list">{ propsCalories.toFixed()} calories</p>
                     </div> 
                </div>    
            </div>

    </div>
    )
}

export default MyRecipesComponent;