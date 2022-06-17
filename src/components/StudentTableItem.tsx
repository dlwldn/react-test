import React, { Dispatch, SetStateAction } from 'react';
import useCheck from '../hooks/useCheck';
import { StudentContentsDType } from '../store/server/student';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {
    listItem: StudentContentsDType;
    checkedData: StudentContentsDType[];
    setCheckedData: Dispatch<SetStateAction<StudentContentsDType[]>>;
};
/* <StudentTableItem/> =========================================================== */
export default function StudentTableItem({
    listItem,
    checkedData,
    setCheckedData,
}: Prop) {
    const { name, grade, school } = listItem;
    const { check, _onChangeCheck } = useCheck({
        checkItem: listItem,
        checkedData,
        setCheckedData,
        targetKey: 'id',
    });

    return (
        <tr onClick={_onChangeCheck}>
            <td>
                <input
                    type='checkbox'
                    checked={check}
                    onChange={_onChangeCheck}
                />
            </td>
            <td>{name}</td>
            <td>{grade}</td>
            <td>{school.name}</td>
        </tr>
    );
}
StudentTableItem.defaultProps = {};
