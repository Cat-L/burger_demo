import React ,{Component}from 'react';
import BurgerIngredients from  'BurgerIngredients.module.css'

class  BurgerIngredients extends Component{


    state={
        Meat:0,
        Cheese:0,
        Salad:0,
        Bacon:0,
    };



    render() {

        let ingredietns_list=null;

        if(this.state.Bacon){

            for(var i=this.state.Bacon;i>=0;i--){
                ingredietns_list
            }
        }

        return (
            <div className="App">

                <div className={BreadTop}/>
                <Ingredients/>
                <div className={BreadButtom}/>

            </div>
        );
    }
};
export default BurgerIngredients;