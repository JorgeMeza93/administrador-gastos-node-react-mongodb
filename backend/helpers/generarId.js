const generarId = () => {
    return (100 * Math.random()).toString(32) + Date.now().toString(32);
}

export default generarId;