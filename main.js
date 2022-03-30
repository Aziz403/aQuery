const aQuery = (query)=>{ /** QUERY = SELECTOR OR DOCUMENT */
    return {
        /** SELECTED Items */
        items:document.querySelectorAll(query),
        getNode:function(){
            return items[0];
        },
        length:()=>{ return items.length},
        
        /** REMOVE THIS Item FUNCTION */
        remove:function(){
            
        },
        /** GET NODE PARENT FUNCTION */
        parent:function(){
            
        },
        /** GET NODES PARENTS FUNCTION */
        parents:function(){
            
        },
        /** GET LIST NODE CHILDES FUNCTION */
        children:function(){
            
        },
        /** START SELECTION METHODS */
        /** GET FIRST Item METHOD */
        first:function(){
            this.items = [this.items[0]];
            return this;
        },
        /** GET LAST Item METHOD */
        last:function(){
            this.items = [this.items[this.items.length-1]];
            return this;
        },
        /** GET SEPICIFEQUE Item METHOD */
        eq:function(index){
            this.items = [this.items[index]];
            return this;
        },
        /** GET Item RELATED WITH OTHER */
        has:function(item){
            newList = [];
            this.items.forEach(el => {
                Array.from(el.children).forEach(ch=>{
                    if(ch.tagName==item.toUpperCase() && !newList.includes(el)){
                        newList = [...newList,el];
                    }
                })
            });
            this.items = newList;
            return this;
        },
        /** FILTER Items FUNCTION */
        filter:function(query){

        },
        /** FILTER Items WITH NOT FUNCTION */
        not:function(query){

        },
        /** END SELECTION METHODS */
        /** START STYLE FUNCTIONS */
        /** CSS FUNCTION FOR CHANGE CSS STYLE */
        css: function(attr,val) {
            switch(attr){
                case 'background-color':
                    if(!val && this.items.length==1){
                        return this.items[0].style.backgroundColor;
                    }
                    this.items.forEach(el => {
                        el.style.backgroundColor = val;
                    });
                    break;    
                case 'color':
                    if(!val && this.items.length==1){
                        return this.items[0].style.color;
                    }
                    this.items.forEach(el => {
                        el.style.color = val;
                    });
                    break;
                default:
                    break;
            }
            return this;
        },
        /** HIDE Item FUNCTION */
        hide:function(duration){
            this.items.forEach(el => {
                el.style.display = 'none';
                el.style.duration = duration ?? 0;
            });
        },
        /** SHOW Item FUNCTION */
        show:function(duration,displayAttr){
            this.items.forEach(el => {
                el.style.display = displayAttr ?? 'block';
                el.style.duration = duration ?? 0;
            });
        },
        /** TOGGLE VISIBILITY Item FUNCTION */
        toggle:function(duration,displayAttr){
            this.items.forEach(el => {
                el.style.display = (el.style.display == 'none') ? (displayAttr ?? 'block'):'none';
                el.style.duration = duration ?? 0;
            });
        },
        /** SLIDE IN FUNCTION */
        slideIn:function(duration){

        },
        /** SLIDE OUT FUNCTION */
        slideOut:function(duration){

        },
        /** TOGGLE SLIDE FUNCTION */
        slideToggle:function(duration){

        },
        /** FADE IN FUNCTION */
        fadeIn:function(duration){

        },
        /** FADE OUT FUNCTION */
        fadeOut:function(duration){

        },
        /** TOGGLE FADE FUNCTION */
        fadeToggle:function(duration){

        },
        /** ANIMATE FUNCTION */
        animate:function(){

        },
        /** STOP ANIMATION FUNCTION */
        stop:function(){

        },
        /** END STYLE FUNCTIONS */
        /** START CLASS FUNCTIONS */
        /** ADD CLASS FUNCTION */
        addClass:function(){

        },
        /** REMOVE CLASS FUNCTION */
        removeClass:function(){

        },
        /** TOGGLE CLASS FUNCTION */
        toggleClass:function(){

        },
        /** END CLASS FUNCTIONS */
        /** START EVENTS FUNCTIONS */
        /** CLICK EVENT FUNCTION */
        click:function(clickCallback){
            this.items.forEach(el => {
                el.addEventListener('click',()=>{
                    return clickCallback();
                })
            });
        },
        /** HOVER EVENT FUNCTION */
        hover:function(clickCallback){
            this.items.forEach(el => {
                el.addEventListener('hover',()=>{
                    return clickCallback();
                })
            });
        },
        /** END EVENTS FUNCTIONS */
    }
}

const $ = aQuery;