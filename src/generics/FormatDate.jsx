const formatPublishedDate = (published) => {
    return new Date(published).toLocaleDateString('sv-SE', { month: 'short', day: 'numeric' });
};

export default formatPublishedDate;