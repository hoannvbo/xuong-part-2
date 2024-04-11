export interface IProduct {
    _id?: number | string,
    image: string,
    name: string,
    category?: string,
    price: number,
    gallery?: string[],
    quantity: number,

    description: string,
    discount: number,
    featured: boolean,
    countInStock: number,
}



// name: {
//     type: String,
//     require: true,
//     lowercase: true,
// },
// slug: {
//     type: String,
//     unique: true,
// },
// category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Category",
//     require: true,
// },
// price: {
//     type: Number,
//     require: true,
//     default: 0,

// },
// image: {
//     type: String
// },
// gallery: {
//     type: Array,
// },
// description: {
//     type: String,
// },
// discount: {
//     type: Number,
//     default: 0,
// },
// countInStock: {
//     type: Number,
//     default: 0,
// },
// featured: {
//     type: Boolean,
//     default: false
// },
// tags: {
//     type: Array,
// },