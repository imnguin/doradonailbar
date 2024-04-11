const headersDefault = {
    'Content-Type': 'application/json'
}

export const fetchData = async (url, data, method = 'POST', headers = headersDefault) => {
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

export const aa = async () => {
    try {
        // // const logininfo = JSON.parse(localStorage.getItem('logininfo'));
        // const _header = {
        //     'user-agent': 'Mozilla/4.0 MDN Example',
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json'
        // };

        // if(method == 'GET') {
        //     _header = {
        //         apikey : data
        //     }
        // }

        // const apiResult = await _fetchAPI2(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, data, _header);

        // return apiResult
        const bb = await fetchData('https://apipos.vbsportals.com/v2/booking/services', '', 'GET', {
            'Content-Type': 'application/json', // Kiểu dữ liệu của request
            'apikey': 'uJT-cVsnn_U='
        });

        return bb;

    } catch (error) {
        return null
    }
}