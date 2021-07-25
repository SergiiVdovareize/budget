(()=>{
    const setData = (json) => {
        const numberNode = document.getElementsByClassName('painful-number')[0]
        const dateNode = document.getElementsByClassName('painful-date')[0]
        
        const date = new Date(parseInt(json.last_updated, 10) * 1000)
        const day = date.getDate().toString().padStart(2, 0)
        const month = (date.getMonth() + 1).toString().padStart(2, 0)
        const year = date.getFullYear()

        numberNode.innerText = json.id.toLocaleString()
        dateNode.innerText = `${day}.${month}.${year}`
    }

    const url = 'https://onetwoteam.com/api/v1/dev'
    fetch(url, {
        method: 'GET',
        headers: {
         'Content-Type': 'application/json'
        }
    })
    .then(data => {
        return data.json()
        // console.log(res)
    })
    .then(json => {
        console.log(json)
        setData(json)
        
    })

    // const tempDate = {
    //     "success": true,
    //     "id": 868986,
    //     "last_updated": 1626912000
    // }

    // setData(tempDate)
})()