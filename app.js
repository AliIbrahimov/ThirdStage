let servlinks = document.querySelectorAll(".serv-link")
let servdesc =  document.querySelectorAll('.desc')

servlinks.forEach(element => {
    element.addEventListener('click',()=>{
        let at = element.getAttribute("myAttr")
        servdesc.forEach(el=>{
            let a = el.getAttribute("myAttrdesc")
            if(at === a){
                servdesc.forEach(element=>{
                    element.classList.remove("active")
                })
                servlinks.forEach(elem=>{
                    elem.classList.remove("active-links")
                })
                element.classList.add("active-links")
                el.classList.add('active')
                
            }
        })
        
    })
});