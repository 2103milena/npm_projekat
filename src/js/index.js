import Search from './modules/Search';

const state = {};

document.querySelector('.search').addEventListener('submit', function (e) {
    e.preventDefault();
    controlSearch();
})

const controlSearch = async () => {

    const query = `pizza`;

    // if (query) {
        state.search = new Search(query);
        await state.search.getRecipe();
        // console.log(state.search.getRecipe());

    // }

}




