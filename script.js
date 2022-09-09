var mainlist = document.getElementById("main__root-list") ;
var focusedlement ;

const upBtn =(e)=>{
    
    var i =0 ;
    var temp ;
    const eventNode = e.target.parentNode ;

    for(i ; eventNode!=mainlist.children[i] ; i++) ;
    if(i != 0 ){
        temp=mainlist.children[i];
        
        if(temp.children[0] == document.activeElement){
            mainlist.removeChild(temp);
            mainlist.insertBefore(temp , mainlist.children[i-1]);
            mainlist.children[i-1].children[0].focus(); 
        }
        else {
            mainlist.removeChild(temp);
            mainlist.insertBefore(temp , mainlist.children[i-1]);
        }
        
    }
    else 
        console.log(`Beginng of the list !!`)
    }

const downBtn = (e)=>{
    var i = 0 ;
    var temp ;
    const eventNode = e.target.parentNode;
    for(i ; mainlist.children[i]!=e.target.parentNode ; i ++);
    if(mainlist.children[i+1]!=mainlist.lastchild) {
        temp = mainlist.children[i];
        
        if(temp.children[0] == document.activeElement){
            mainlist.removeChild(temp);
            mainlist.insertBefore(temp , mainlist.children[i+1]);
            mainlist.children[i+1].children[0].focus();
        } 
        else {
            mainlist.removeChild(temp);
            mainlist.insertBefore(temp , mainlist.children[i+1]);
        }
    }
    else 
        console.log('End of the list !!')
}

const removeBtn = (e)=>{
    mainlist.removeChild(e.target.parentNode);
}

const focused = (e)=>{
    focusedlement = e.target.parentNode ;
    console.log(focusedlement);
}
const add = (e)=> {
    
    const container = document.createElement('div');

    const input = document.createElement('input');
    container.appendChild(input);

    const up_btn = document.createElement('button');
    up_btn.innerText="↑";
    up_btn.addEventListener('click' , upBtn);
    up_btn.addEventListener('mousedown', (e)=>{ e.preventDefault()})
    container.appendChild(up_btn);

    const down_btn = document.createElement('button');
    down_btn.innerText="↓" ;
    down_btn.addEventListener('click' , downBtn )
    down_btn.addEventListener('mousedown', (e)=>{ e.preventDefault()})
    container.appendChild(down_btn);

    const remove_btn = document.createElement('button')
    remove_btn.innerText="x"
    remove_btn.addEventListener('click',removeBtn);
    container.appendChild(remove_btn);

    mainlist.prepend(container)
}
