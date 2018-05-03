import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import AccountScreen from './components/AccountScreen';
import CategoryListScreen from './components/CategoryListScreen';
import IngredientListScreen from './components/IngredientListScreen';
import RecipeListScreen from './components/RecipeListScreen';
import RecipeScreen from './components/RecipeScreen';
import AddDerivedRecipeForm from './components/AddDerivedRecipeForm';
import AddScreen from './components/AddScreen';
import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/LoginScreen';

let Router = () =>
  <HashRouter>
        <Switch>
            <Route path="/register" component={RegisterScreen} />  
            <Route path="/login" component={LoginScreen} />  
            <Route path="/categories" component={CategoryListScreen} />  
            <Route path="/ingredients" component={IngredientListScreen}/> 
            <Route path="/recipes" exact component={RecipeListScreen} />
            <Route path="/recipes/1" component={RecipeScreen} />  
            <Route path="/account" component={AccountScreen} />  
            <Route path="/categories" component={CategoryListScreen} />
            <Route path="/ingredients" component={IngredientListScreen}/>
            <Route path="/account" component={AccountScreen} />
            <Route path="/add" component={AddScreen} />
            <Route path="/add-derived" component={AddDerivedRecipeForm} />
            <Route path="/#/recipes/:recipe" />
        </Switch>
</HashRouter>;

export default Router;
