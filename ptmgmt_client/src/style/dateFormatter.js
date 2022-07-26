const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-')
    const result = [month, day, year].join('/')
    return result
};

export default formatDate