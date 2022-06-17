import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export default function useCustomRouter() {
    // const location = useLocation();
    // const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const changeParams = (params: Record<string, string | string[]>) => {
        const changedParams = createSearchParams({
            ...Object.fromEntries(searchParams),
            ...params,
        });
        // navigate({
        //     pathname: location.pathname,
        //     search: changedParams,
        // });
        setSearchParams(changedParams);
    };

    return {
        changeParams
    }
}