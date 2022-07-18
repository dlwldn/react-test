import React from 'react';
import { useSummoner } from '../../store/server/riot';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {}
/* <Riot/> =========================================================== */
export default function Riot() {
    const { status, data } = useSummoner('user', '정체불명러브레터');

    console.log(data);
    return <div><h3>index</h3></div>
}
Riot.defaultProps = {}