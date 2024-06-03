data = [
    {
        id: '1',
        name: 'ibrahim',
        position: 'software developer',
    },
    {
        id: '2',
        name: 'fira',
        position: 'mechanical enginner',
    },
]

//console.log(data)

mappedData = data.map((result)=>({
   id: result.id,
   title: result.name + ' is a ' + result.position
}))
console.log(mappedData)