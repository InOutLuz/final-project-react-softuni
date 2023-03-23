const formatDate = (input) => {
    const createdAtDate = new Date(input.seconds * 1000); // convert Firebase timestamp to JavaScript Date object
    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    };

    return createdAtDate.toLocaleDateString("en-UK", options);
};

export default formatDate;
