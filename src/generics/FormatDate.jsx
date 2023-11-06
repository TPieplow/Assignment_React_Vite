const formatPublishedDate = (published) => {
    return new Date(published).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export default formatPublishedDate;