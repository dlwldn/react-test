import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useCheckAll from '../hooks/useCheckAll';
import useCustomRouter from '../hooks/useCustomRouter';
import useSort from '../hooks/useSort';
import { StudentContentsDType, useStudent } from '../store/server/student';
import Pagination from './common/Pagination';
import Table from './common/Table';
import StudentTableHeader from './StudentTableHeader';
import StudentTableItem from './StudentTableItem';
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <StudentTable/> =========================================================== */
export default function StudentTable() {
    const [searchParams] = useSearchParams();
    const { changeParams } = useCustomRouter();
    const { status: studentSortStatus, setSort } = useSort();
    const { status, data, error } = useStudent('1', {
        page: Number(searchParams.get('page')),
        sort: studentSortStatus,
    });
    const { checkAll, checkedData, setCheckedData, _onChangeCheckAll } =
        useCheckAll({ listItem: data?.contents || [] });
    if (status === 'loading') return <div>로딩중...</div>;
    if (!data) return null;
    
    const setPage = (page: number) => {
        changeParams({ page: String(page) });
    };

    const renderItem = (item: StudentContentsDType, idx: number) => {
        return (
            <StudentTableItem
                listItem={item}
                key={item.id}
                checkedData={checkedData}
                setCheckedData={setCheckedData}
            />
        );
    };
    return (
        <div>
            <Table
                source={data.contents}
                HeaderComponent={
                    <StudentTableHeader
                        sort={studentSortStatus}
                        setSort={setSort}
                        checkAll={checkAll}
                        onChangeCheckAll={_onChangeCheckAll}
                    />
                }
                renderItem={renderItem}
                colWidth={[40, 120, 120, 120]}
            />
            <Pagination
                totalPage={data.totalPages}
                currentPage={Number(searchParams.get('page'))}
                numberOfItems={3}
                setPage={setPage}
            />
            {checkedData.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}
StudentTable.defaultProps = {};
