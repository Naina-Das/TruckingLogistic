export const checkIEmpty = (obj)=>{
    console.log("Object here", obj);
    if(Object.keys(obj).length === 0) {
        return true;
    }
    for(let key in obj){
        if(!obj[key]){
            return true;
        }
    }
    return false;
}