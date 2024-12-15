import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_GvNjtKrqhywyQ24Rvdywh0rwq22xYDWFNizbwQlI');

export async function convertcurrency(fromcurrency, tocurrency, cunit) {
    const res = await freecurrencyapi.latest({
        base_currency: fromcurrency,
        currencies: tocurrency
    });
    const multiplier = res.data[tocurrency];
    return multiplier * cunit;
}

// convertcurrency("INR", "USD", 3);
