window.addEventListener('DOMContentLoaded', start);

async function start() {
    const main = document.querySelector('main');
    main.replaceChildren();
    const recipes = await getAllRecipes();
    recipes.map(r => createPreview(r, main));
}

function createPreview(recipe, main) {
    const img = createImgWithSrc(recipe.img);
    const preview = createStructure('article', 'preview',
        createStructure('div', 'title',
            createStructure('h2', undefined, recipe.name)
        ),
        createStructure('div', 'small',
            img)
    );
    preview.addEventListener('click', () => {
        preview.querySelector('h2').textContent = 'Loading...';
        createToggle(preview, main, recipe._id)
    });
    main.appendChild(preview);
}

async function createToggle(preview, main, id) {
    const recipe = await getRecipe(id);
    const img = createImgWithSrc(recipe.img);
    const ingredients = recipe.ingredients.map(i => createStructure('li', undefined, i));
    const steps = recipe.steps.map(s => createStructure('p', undefined, s));
    const toggle = createStructure('article', undefined,
        createStructure('h2', undefined, recipe.name),
        createStructure('div', 'band',
            createStructure('div', 'thumb',
                img,
                createStructure('div', 'ingredients',
                    createStructure('h3', undefined, 'Ingredients:'),
                    createStructure('ul', undefined, ...ingredients)
                )
            )
        ),
        createStructure('div', 'description',
            createStructure('h3', undefined, 'Preparation:'),
            ...steps)
    );
    preview.replaceWith(toggle);
}

function createStructure(type, elClass, ...content) {
    const element = document.createElement(type);

    if (elClass !== undefined) {
        element.classList.add(elClass);
    }

    for (let item of content) {

        if (typeof item === 'string') {
            item = document.createTextNode(item);
        }

        element.appendChild(item);
    }

    return element;
}

function createImgWithSrc(src) {
    const img = document.createElement('img');
    img.src = src;

    return img;
}

async function getAllRecipes() {
    const data = await fetchAndReturnData('http://localhost:3030/jsonstore/cookbook/recipes');
    return Object.values(data);
}

async function getRecipe(id) {
    return await fetchAndReturnData(`http://localhost:3030/jsonstore/cookbook/details/${id}`);
}

async function fetchAndReturnData(url) {
    try {
        let response = await fetch(url);

        if (response.status !== 200) {
            throw new Error('Error');
        }
        return await response.json();

    } catch (error) {
        throw error;
    }
}