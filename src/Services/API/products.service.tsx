//TODO create interface

export const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
        .then(reponse => reponse.json())
        .then(data => {
            resolve(data)
        }).catch(err => {
            console.log(err)
            reject([])
        })
    })
}