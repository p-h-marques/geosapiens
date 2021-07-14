export function validURL(str) {
    let pattern = new RegExp(
        '^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$',
        'i',
    )

    return !!pattern.test(str)
}

export function isEqualArrays(arrA, arrB){
    if (!arrA || !arrB) return false

    if (arrA.length != arrB.length) return false

    for (let i = 0, l = arrA.length; i < l; i++) {
        if (arrA[i] instanceof Array && arrB[i] instanceof Array) {
            if (!isEqualArrays(arrA[i], arrB[i])) return false

        } else if (arrA[i] != arrB[i]) {
            return false
        }
    }

    return true
}