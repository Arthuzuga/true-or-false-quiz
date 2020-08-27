const decodeText = (value) => {
    return value.replace(/&quot;/gm, `"`).replace(/&#039;/gm, `'`).replace(/&ocirc;/gm, `ô`)
}

export default decodeText