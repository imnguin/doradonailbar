const headersDefault = {
    'Content-Type': 'application/json'
}

export const _fetchAPI = async (url, data, method = 'POST', headers = headersDefault) => {
    try {
        let request = {
            method: method,
            headers: headers
        }

        if (method == 'POST') {
            request = {
                ...request,
                body: typeof data === 'object' ? JSON.stringify(data) : JSON.stringify({ data })
            }
        }

        const response = await fetch(url, request);

        if (!response.ok) {
            throw new Error('Fetch data failed!');
        }

        return await response.json();

    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
}