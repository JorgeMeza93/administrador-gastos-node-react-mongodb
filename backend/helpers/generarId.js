const generarId = () => {
    const cadena = (100 * Math.random()).toString(32) + Date.now().toString(32);
    let token;
    for(let i = 0; i < cadena.length; i++){
        if(cadena.charAt(i) === "."){
            token = cadena.replace(".", "0");
        }
    }
    return token;
}

export default generarId;