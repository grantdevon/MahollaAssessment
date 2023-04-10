import { types } from "mobx-state-tree";
import { IProduct } from "../../Constants/product.interface";
import { fetchData } from "../../Services/API/products.service";

const Rating = types.model("Rating", {
    rate: types.number,
    count: types.number
})

const ProductModel = types.model("ProductModel", {
    id: types.number,
    title: types.string,
    price: types.number,
    description: types.string,
    category: types.string,
    image: types.string,
    rating: types.optional(Rating, { rate: 0, count: 0 })
})


export const ProductStore = types.model({
    products: types.array(ProductModel)
}).actions(store => ({
    setProducts(products: IProduct[]) {
        store.products = products as IProduct[]
    },
    async fetchProducts() {
        const apiResult: IProduct[] = await fetchData() as IProduct[]
        const products = apiResult.map(products => ({
            id: products.id,
            title: products.title,
            price: products.price,
            description: products.description,
            category: products.category,
            image: products.image,
            rating: products.rating
        }))
        console.log("ran rhis");
        
        this.setProducts(products)
    }
}))

let _products: any;
export const useProducts = () => {
    if (!_products) {
        _products = ProductStore.create({
            products: []
        })
    }
    return _products
}