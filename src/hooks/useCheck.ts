import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Prop<T> = {
    targetKey: keyof T;
    checkItem: T;
    checkedData: T[];
    setCheckedData: Dispatch<SetStateAction<T[]>>;
};

export default function useCheck<T>(prop: Prop<T>) {
    const { targetKey, checkItem, checkedData, setCheckedData } = prop;
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (
            checkedData.find((item) => item[targetKey] === checkItem[targetKey])
        ) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    }, [checkedData]);

    const _onChangeCheck = () => {
        if (check) {
            const filteredData = checkedData.filter(
                (item) => item[targetKey] !== checkItem[targetKey]
            );
            setCheckedData(filteredData);
        }
        if (!check) {
            setCheckedData([...checkedData, checkItem]);
        }
    };

    return {
        check,
        _onChangeCheck,
    };
}
