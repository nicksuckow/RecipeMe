(this["webpackJsonpdinner-me"]=this["webpackJsonpdinner-me"]||[]).push([[0],{11:function(e,a,r){e.exports=r(22)},16:function(e,a,r){},17:function(e,a,r){},22:function(e,a,r){"use strict";r.r(a);var c=r(0),i=r.n(c),n=r(3),t=r.n(n),o=(r(16),r(4)),p=r(5),s=r(7),l=r(6),h=(r(17),r(36)),d=function(e){Object(s.a)(r,e);var a=Object(l.a)(r);function r(){return Object(o.a)(this,r),a.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return i.a.createElement("div",{className:"box"},i.a.createElement(h.a,{variant:"contained",onClick:this.props.handleClick},"New Recipe"),i.a.createElement("div",{className:"fadeIn",key:Math.random()},i.a.createElement("h4",{id:"recipe"},this.props.recipe)))}}]),r}(i.a.Component),u=[{recipe:""},{recipe:"Taco Bake"},{recipe:"Chicken Bacon Ranch Casserole"},{recipe:"Tacos"},{recipe:"Chicken Bacon Ranch Wraps"},{recipe:"Hamballs"},{recipe:"BLT"},{recipe:"Tator Tot Casserole"},{recipe:"Macaroni and Corn"},{recipe:"Chicken Quinoa\xa0and Vegetable Skillet"},{recipe:"Philly Cheese Steaks"},{recipe:"Sausage Sandwiches"},{recipe:"Flat Breads"},{recipe:"Ham and Egg Breakfast Sandwiches"},{recipe:"Pancakes"},{recipe:"Breakfast Hash"},{recipe:"Breakfast Casserole"},{recipe:"Biscuits and Gravy"},{recipe:"Wraps"},{recipe:"Goulash"},{recipe:"Dorito Salad"},{recipe:"Pork Loin"},{recipe:"Wings"},{recipe:"Pineapple Salsa Chicken"},{recipe:"Orange Chicken"},{recipe:"Drumsticks"},{recipe:"Burritos"},{recipe:"Crunch Wraps"},{recipe:"Alfredo Roll Ups"},{recipe:"Cuban Sandwiches"},{recipe:"Ham Sliders"},{recipe:"Stuffed Bell Peppers"},{recipe:"Chicken Enchilada Soup"},{recipe:"Chicken Stir Fry"},{recipe:"Scalloped Potatoes and Ham"},{recipe:"Crockpot Italian Chicken"},{recipe:"Loaded Baked Potatoes"},{recipe:"Cheesy Chicken and Rice Bake"},{recipe:"Hamburger Rice Hotdish"},{recipe:"Chicken Noodle Soup"},{recipe:"Meatloaf"},{recipe:"White Chicken Chili"},{recipe:"Lasagna"},{recipe:"Beef or Chicken Enchiladas"},{recipe:"Cap\u2019n Crunch Chicken Strips"},{recipe:"Steaks"},{recipe:"Pulled Pork"},{recipe:"Brisket"},{recipe:"Smoked Beans"},{recipe:"Smoked Chicken"}],k=function(e){Object(s.a)(r,e);var a=Object(l.a)(r);function r(){var e;return Object(o.a)(this,r),(e=a.call(this)).handleClick=function(){var a=e.randomRecipe();e.setState({recipe:a.recipe}),e.shuffleRecipe(u)},e.state={recipe:u[0].recipe},e}return Object(p.a)(r,[{key:"randomRecipe",value:function(){var e=Math.floor(Math.random()*u.length);return u[e]}},{key:"shuffleRecipe",value:function(e){return e.sort((function(){return Math.random()-.5}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App-header"},i.a.createElement("h1",null,"RecipeMe"),i.a.createElement("div",{className:"Body"},i.a.createElement("h4",null,"Hit the button to randomly select a new recipe"),i.a.createElement(d,Object.assign({handleClick:this.handleClick},this.state))))}}]),r}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.0d8f47be.chunk.js.map