

export default function Validate(input) {

    let error = {}
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;

    if (!input.name.trim()) {
        error.name = 'Name is require'        
    } else if (!regexName.test(input.name.trim())){
        error.name = 'The name only accepts letters'
    }

    if (!input.img.trim()) {
        error.img = 'Image is require'
    }

    if (input.types.length < 1) {
        error.types = 'At least one type is required or unknown'
    }
    return error
}