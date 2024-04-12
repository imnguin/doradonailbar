// import { hideLoading, showLoading } from '../components/redux/reducers';
import { HOST_LIST } from "./constants/SystemVars";
import { _fetchAPI } from "./FuncRequest";

export const _fetchData = async (hostName, apiPath, data, method = 'POST', _header) => {
    try {
        const apiResult = await _fetchAPI(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, data, method, _header);
        return apiResult;
    } catch (error) {
        return null
    }
}