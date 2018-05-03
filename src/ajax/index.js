export let getAllRecipes = () =>
  fetch('/all-recipes')
  .then(res => res.json())

export let getMyRecipes = (token) =>
  fetch('/recipes', {
    headers: { authorization: token }
  })
  .then(res => res.json())

export let getMyCookBooks = (token) =>
  fetch('/cookbooks', {
    headers: {authorization: token}
  })
  .then(res => res.json())

export let postRecipe = (recipe, token) =>
  fetch('/recipes', {
    body: recipe,
    method: 'POST',
    headers: {authorization: token,
    'content-type': 'application/json'
  }
  })
  .then(res => res.json())

export let createCookbook = (cookbook, token) =>
  fetch('/cookbooks', {
    body: cookbook,
    method: 'POST',
    headers: {
      authorization: token,
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())


export let getRecipeById = (id) =>
  fetch('/recipe', {
    method: 'GET',
    headers: {
      id: id,
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

export let getRecipesBySearch = (searchLibrary) =>
  fetch('/search-recipes', {
    body: JSON.stringify({searchLibrary}),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())


export let createAccount = (user) =>
  fetch('/users', {
    body: JSON.stringify(user),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
