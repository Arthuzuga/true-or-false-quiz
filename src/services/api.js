const getQuestions = async () => {
    const res = await fetch('http://localhost:3000/questions')
    return res.json()
}

export default getQuestions