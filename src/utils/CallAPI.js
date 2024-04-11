import { hideLoading, showLoading } from '../components/redux/reducers';
import { HOST_LIST } from "./constants/SystemVars";
import { _fetchAPI, _fetchAPI2 } from "./FuncRequest";

// const _fetchData = (hostName, apiPath, data, method = 'POST') => async (dispatch, state) => {
//     try {
//         // const logininfo = JSON.parse(localStorage.getItem('logininfo'));
//         const _header = {
//             'user-agent': 'Mozilla/4.0 MDN Example',
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json'
//         };

//         if(method == 'GET') {
//             _header = {
//                 // ..._header,
//                 apikey : data
//             }
//         }
        
//         dispatch(showLoading());
//         const apiResult = await _fetchAPI(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, data, _header);
//         dispatch(hideLoading());
//         return apiResult

//     } catch (error) {
//         return {
//             iserror: true,
//             message: error.message,
//             messagedetail: error,
//             resultObject: null
//         }
//     }
// }

const _fetchData = async (hostName, apiPath, data, method = 'POST') => {
    try {
        // const logininfo = JSON.parse(localStorage.getItem('logininfo'));
        const _header = {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        };

        if(method == 'GET') {
            _header = {
                // ..._header,
                apikey : data
            }
        }
        console.log(_header)
        
        // dispatch(showLoading());
        const apiResult = await _fetchAPI(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, data, _header);
        // dispatch(hideLoading());
        return apiResult

    } catch (error) {
        return {
            iserror: true,
            message: error.message,
            messagedetail: error,
            resultObject: null
        }
    }
}

const _fetchData2 = async (hostName, apiPath, data, method = 'POST') => {
    try {
        // const logininfo = JSON.parse(localStorage.getItem('logininfo'));
        const _header = {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        };

        if(method == 'GET') {
            _header = {
                apikey : data
            }
        }

        const apiResult = await _fetchAPI2(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, data, _header);

        return apiResult

    } catch (error) {
        return {
            iserror: true,
            message: error.message,
            messagedetail: error,
            resultObject: null
        }
    }
}

export {
    _fetchData,
    _fetchData2
}