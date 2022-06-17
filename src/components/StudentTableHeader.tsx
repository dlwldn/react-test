import React, { ChangeEvent } from 'react';
import useSort, { SortStatusType, SortType } from '../hooks/useSort';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {
    sort: SortStatusType;
    setSort: (key: string) => void;
    checkAll: boolean;
    onChangeCheckAll: (e: ChangeEvent<HTMLInputElement>) => void;
};
/* <StudentTableHeader/> =========================================================== */
export default function StudentTableHeader({ sort, setSort, checkAll, onChangeCheckAll }: Prop) {
    return (
        <tr>
            <th>
                <input type='checkbox' checked={checkAll} onChange={onChangeCheckAll}/>
            </th>
            <th onClick={() => setSort('name')}>
                이름 {sort.key === 'name' && sort.value}
            </th>
            <th onClick={() => setSort('grade')}>
                학년 {sort.key === 'grade' && sort.value}
            </th>
            <th onClick={() => setSort('schoolName')}>
                학교 {sort.key === 'schoolName' && sort.value}
            </th>
        </tr>
    );
}
StudentTableHeader.defaultProps = {};
