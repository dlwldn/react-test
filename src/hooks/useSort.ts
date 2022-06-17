import { useState } from 'react'

export type SortType = 'idle' | 'asc' | 'desc';
export type SortStatusType = {
    key: string;
    value: SortType;
}

export default function useSort() {
    const [status, setStatus] = useState<SortStatusType>({
        key: '',
        value: 'idle'
    });

    const setSort = (key: string) => {
        if(key !== status.key) {
            setStatus({
                key,
                value: 'asc'
            });
            return
        }
        switch(status.value) {
            case 'idle':
                setStatus({
                    key,
                    value: 'asc'
                });
                break;
            case 'asc':
                setStatus({
                    key,
                    value: 'desc'
                });
                break;
            case 'desc':
                setStatus({
                    key,
                    value: 'idle'
                });
                break;
        }
    }

    return {
        status,
        setSort
    }
}