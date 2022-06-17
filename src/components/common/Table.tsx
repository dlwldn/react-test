import React from 'react';
import styled from 'styled-components';

/* Constants =========================================================== */
/* Prop =========================================================== */
type RenderItemType<T> = (item: T, idx: number) => React.ReactNode;
type Prop<T> = {
    HeaderComponent: React.ReactNode;
    renderItem: RenderItemType<T>;
    source: T[];
    colWidth: number[];
};
/* <Table/> =========================================================== */
const TableWrap = styled.table`
    width: 100%;
    table-layout: fixed;

    tr {
        height: 38px;
    }

    td, th {
        vertical-align: middle;
        text-overflow: ellipsis;
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        border: 1px solid gray;
        padding: 0 10px;
    }   
    th {
        background: skyblue;
    }
`
export default function Table<T>(prop: Prop<T>) {
    const { HeaderComponent, renderItem, source, colWidth } = prop;
    const colWidthItem = colWidth.map((item, idx) => {
        return <col width={item} key={idx} />;
    });
    return (
        <TableWrap>
            <colgroup>{colWidthItem}</colgroup>
            <thead>{HeaderComponent}</thead>
            <tbody>
                {source.length === 0 ? (
                    <tr>
                        <td>데이터 없음</td>
                    </tr>
                ) : (
                    source.map(renderItem)
                )}
            </tbody>
        </TableWrap>
    );
}
Table.defaultProps = {};
