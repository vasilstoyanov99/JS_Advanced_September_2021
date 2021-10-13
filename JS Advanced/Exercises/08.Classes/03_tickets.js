function createAndSortClasses(ticketsData, sortBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = [];

    for (let ticketData of ticketsData) {
        const [destination, priceAsString, status] = ticketData
            .split('|').filter(a => a);
        const ticket = new Ticket(destination, Number(priceAsString), status);
        result.push(ticket);
    }

    if (sortBy !== 'price') {
        result.sort((t1, t2) => t1[sortBy].localeCompare(t2[sortBy]));
    } else {
        result.sort((t1, t2) => t1.price - t2.price);
    }

    return result;
}