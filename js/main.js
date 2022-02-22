class Square{
    constructor(img,size){
            this.size=size;
            this.img=img;
            this.is_ctl=false;
    
            let el=document.createElement("div");
            el.classList.add("lewa");
            this.cont_left=el;
            document.body.appendChild(el);
    
            
            let el2=document.createElement("div");
            el2.classList.add("prawa");
            this.cont_right=el2;
            document.body.appendChild(el2);
            
            
            this.cutImageUp();
    
            this.PlaceToPaste();
            
            document.body.onkeydown=(e) => {this.key_down(e,this)};
            document.body.onkeyup=(e) => {this.key_up(e,this)};
        }
    
        key_down(e,dis){
            console.log("lll",this,e.key);
            if(e.key=="Meta" || e.key=="Control"){

                dis.is_ctl = true;
            } 
            console.log('aa',dis,this.is_ctl);
        }
        
        key_up(e,dis){
            if(e.key=="Meta" || e.key=="Control"){
                dis.is_ctl=false
            }
            console.log('oo',this.is_ctl,'oo');
        }

        cutImageUp() {
           // sprobowac zrobic lepiej z modulo
           // kiedys xd

            let i=0;
            let j=0;
            for(let x = 0; x < 20;x++) {
                for(let y = 0; y < 32; y++) {
                    if(y<16 && i<1){
                        var canvas = document.createElement('canvas');
                        canvas.width = this.size;
                        canvas.height = this.size;
                        canvas.classList.add('square')
                        canvas.onclick = (e) => {
                           console.log('aaaaa')

                           let els=document.getElementsByClassName("zaznaczony");
                            
                            for(let i=0; i<els.length; i++){
                                var ctx=els[i].getContext("2d");
                                ctx.drawImage(e.target,0,0,this.size,this.size,0,0,this.size,this.size);
                        }
                            for(let i=els.length-1; i>=0; i--){
                                els[i].classList.remove("zaznaczony");
                            }
                           
                        }
                        var context = canvas.getContext('2d');
                        
                        context.drawImage(this.img,  y*this.size, x * this.size, this.size, this.size, 0, 0, this.size, this.size);
                        


                        this.cont_left.appendChild(canvas)
                   } 
                   
                   
                            
                   if(y>15 && j > 0){
                   
                        var canvas = document.createElement('canvas');
                        canvas.width = this.size;
                        canvas.height = this.size;
                        canvas.classList.add('square')

                        canvas.onclick = (e) => {
                        let els=document.getElementsByClassName("zaznaczony");
                            for(let i=0; i<els.length; i++){
                                var ctx=els[i].getContext("2d");
                                ctx.drawImage(e.target,0,0,this.size,this.size,0,0,this.size,this.size);
                        }
                            for(let i=els.length-1; i>=0; i--){
                                els[i].classList.remove("zaznaczony");
                            }           
                        }
                        var context = canvas.getContext('2d');

                        context.drawImage(this.img,  y*this.size, x * this.size, this.size, this.size, 0, 0, this.size, this.size);
                        
                        this.cont_left.appendChild(canvas)
                       }         
                }  
                if(x==19 && i < 1){
                    j++
                    x=0  
                    i++
                }
            }        
        }
    
        PlaceToPaste() {
    
            for(var x = 0; x < 20; ++x) {
                for(var y = 0; y < 32; ++y) {

                    var empty = document.createElement('canvas');
                    empty.width = this.size;
                    empty.height = this.size;
                    empty.id = `${x+100}_${y+100}`
                    empty.classList.add('empty')                  
                    empty.addEventListener('click',(e) => {this.dodaj_klase_zaznaczenia(this,e)},true);                 
                    this.cont_right.appendChild(empty)
                  
                }
             
            }
        
        }
    
        dodaj_klase_zaznaczenia(dis,e){

            if (dis.is_ctl == false){
                for(var x = 0; x < 20; ++x) {
                    for(var y = 0; y < 32; ++y) {
                        let a = document.getElementById(`${x+100}_${y+100}`)
                        a.classList.remove('zaznaczony')
                    }
                }
            }
            e.target.classList.add("zaznaczony")
        }    
    }
    window.addEventListener('DOMContentLoaded', (event) => {
        
        var image = new Image();
        image.onload = function(){
            new Square(this,12)
        };
        image.src ='images/sprites2.png';
  
    });