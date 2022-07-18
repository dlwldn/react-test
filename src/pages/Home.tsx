import React from 'react';
import { Link } from 'react-router-dom';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <Home/> =========================================================== */
export default function Home() {
    return (
        <div>
            <Link to={`/student?page=0&size=15`}>학생 관리 페이지로 이동</Link>
            <Link to={`/riot`}>롤 검색 페이지로 이동</Link>
        </div>
    );
}
Home.defaultProps = {};
