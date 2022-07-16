async function getGithubuser(){
    let response = await fetch('https://api.github.com/users');
    console.log(response)
    let githubData = await response.json()
    console.log(githubData)

    //trying to perform some DOM manipulation
    console.log(githubData[0].avatar_url);
    console.log(githubData[0].login)
    //to fetch all the data we will use map method 
    let display = "";
    githubData.map((values) => {
        display += `
         <div class="cards">
            <img src= ${values.avatar_url}  alt="${values.login}">
                <h1>${values.login}</h1>
                </div>
        `
    });
    document.getElementById("root").innerHTML = display;

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
    console.log("All data is been displayed")
}

getGithubuser()