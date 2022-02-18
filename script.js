function plus(){
    let count = 0;
    return function(n){
        return count += n;
    }
}