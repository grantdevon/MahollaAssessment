import { productsAPI } from "../../Constants/api.constant"
import { IProduct } from "../../Constants/product.interface"

export const fetchData = async () => {
    return new Promise((resolve, reject) => {
        fetch(productsAPI)
        .then(reponse => reponse.json())
        .then(data => {
            let product: IProduct = data            
            resolve(product)
        }).catch(err => {
            console.log(err)
            reject([])
        })
    })
}