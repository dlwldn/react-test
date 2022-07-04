import React, { useEffect, useState } from 'react';

type Prop<T> = {
    listItem: T[];
};

export default function useCheckAll<T>(prop: Prop<T>) {
    const { listItem } = prop;
    const [checkAll, setCheckAll] = useState(false);
    const [checkedData, setCheckedData] = useState<T[]>([]);

    useEffect(() => {
        if (listItem.length === 0) return;
        const isCurrentList = listItem.filter(item => checkedData.includes(item));
        if (listItem.length === isCurrentList.length) {
            setCheckAll(true);
        } else {
            setCheckAll(false);
        }
    }, [listItem, checkedData]);

    const _onChangeCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!checkAll) {
            const filteredData = listItem.filter((item) => {
                return !checkedData.includes(item)
            } );
            setCheckedData([...checkedData, ...filteredData]);
        }
        if (checkAll) {
            const filteredData = checkedData.filter((item) => {
                return !listItem.includes(item)
            } );
            setCheckedData(filteredData);
        }
    };

    const checkedDataInit = () => {
        setCheckedData([]);
    }

    return {
        checkAll,
        checkedData,
        setCheckedData,
        checkedDataInit,
        _onChangeCheckAll,
    };
}
