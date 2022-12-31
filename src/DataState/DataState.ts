export const dataState: DataStateType = {
    pages:
        [
            {
                heading: "Cars",
                about: "BMW, Audi, Opel"
            },
            {
                heading: "Shoes",
                about: "Adidas, Puma, Nike"
            },
            {
                heading: "Phones",
                about: "Apple, Samsung, Nokia"
            }
        ],

}

export type DataStateType = {
    pages: Array<PagesType>
}

export type PagesType ={
    heading: string
    about: string
}