import React from 'react';
import styled from 'styled-components';
import StudentTable from '../components/StudentTable';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <Student/> =========================================================== */
const TableWrap = styled.div`
    width: 450px;
`
export default function Student() {
    return (
        <TableWrap>
            <StudentTable />
        </TableWrap>
    );
}
Student.defaultProps = {};
