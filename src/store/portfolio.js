import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
    state: () => {
        return {
            works: [
                {id: 1, name: 'Finteria', link: 'http://finter-site.surge.sh/', image: 'finteria.png'},
                {id: 2, name: 'Metaverse', link: 'https://metaverse-fin.surge.sh/roadmap.html', image: 'metaverse.png'},
                {id: 3, name: 'Skipgrind', link: 'https://wow-fin.surge.sh/roadmap.html', image: 'skipgrind.png'},
            ]
        }
    }
})
