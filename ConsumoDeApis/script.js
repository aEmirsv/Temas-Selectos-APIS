fetch("https://fakerapi.it/api/v2/users?_quantity=10&_gender=female")
    .then(res=> res.json())
    .then(response=>{
        console.log(response)
    })

