import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
    state: () => {
        return {
            works: [
                {id: 1, name: 'Finteria', link: 'https://bit.ly/3f7DWUE', image: 'finteria.png'},
                {id: 2, name: 'Metaverse', link: 'https://bit.ly/3TTid1y', image: 'metaverse.png'},
                {id: 3, name: 'Skipgrind', link: 'https://bit.ly/3Dcu6sV', image: 'skipgrind.png'},
                {id: 4, name: 'Green Rating', link: 'https://bit.ly/3DwSDtS', image: 'green-rating.png'},
                {id: 5, name: 'Milana', link: 'https://bit.ly/3gJuqHK', image: 'milana.png'},
                {id: 6, name: 'Giperborea', link: 'https://bit.ly/3DfLBsm', image: 'giperborea.png'},
                {id: 7, name: 'Globally', link: 'https://bit.ly/3fcS7I5', image: 'globally.png'},
                {id: 8, name: 'Horizon Interface', link: 'https://bit.ly/3zhFnqF', image: 'horizon-interface.png'},
                {id: 9, name: 'Ventures', link: 'https://bit.ly/3NeaARd', image: 'ventures.png'},
                {id: 10, name: 'Buy Brend', link: 'https://bit.ly/3gB9H8Z', image: 'buy-brend.png'},
                {id: 11, name: 'Uchimed', link: 'https://bit.ly/3SAwAXG', image: 'uchimed.png'},
                {id: 12, name: 'Shiba & Corgi', link: 'https://bit.ly/3DzZ2oo', image: 'shiba-corgi.png'},
            ]
        }
    }
})
