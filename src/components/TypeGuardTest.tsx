import React from 'react';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {}

type Animal = {
    cat: '야옹',
    bat: '찌익'
}

type IU = {
    name: '아이유',
    cat: '야옹'
}
/* <TypeGuardTest/> =========================================================== */
export default function TypeGuardTest() {

    const isAnimal = (item: Animal | IU): item is Animal => {
        return (item as Animal).bat !== undefined
    }
    const test = (item: Animal | IU) => {
        
        if(isAnimal(item)) {

        } else {
            
        }
    }

    return <div><h3>TypeGuardTest</h3></div>
}
TypeGuardTest.defaultProps = {}