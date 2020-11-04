const BASE_URL = 'https://zoom-data-back.herokuapp.com/upload'


const postZoom = async (file) => {
    console.log("postZoom api called")
    console.log("in postZoom, file: ", file)
    const fd = new FormData();
    fd.append('file', file);
    let response = await fetch(BASE_URL, {
                                            method: 'POST',
                                            body: fd
                                            })
    let respJson = await response.json()
    console.log(respJson)
    return respJson
}

export default postZoom



