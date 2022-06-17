import { useQuery } from 'react-query';
import apiClient from '.';
import { SortStatusType, SortType } from '../../hooks/useSort';

type ParentPhoneDType = {
    phone: string;
    type: string;
};

type AttachmentDType = {
    savedName: string;
    originalName: string;
    type: string;
    ext: string;
    directoryName: string;
    size: number;
    addDateTime: string;
    isUse: boolean;
    playTime: number;
    url: string;
    fileType: string;
    media: boolean;
};

export type StudentContentsDType = {
    name: string;
    textId: string;
    phone: string;
    gender: string;
    birthDay: string;
    imgUrl: string | null;
    school: {
        name: string;
        id: number;
    };
    grade: string;
    classesName: string | null;
    parentPhones: Array<ParentPhoneDType>;
    status: string;
    changedAt: string;
    returnedAt: string;
    statusChangeSubject: string | null;
    statusChangeContent: string | null;
    zipcode: string;
    address: string;
    detailAddress: string;
    attachmentNo: string;
    attachment: AttachmentDType | null;
    entranceDate: string;
    testDate: string;
    testTime: string;
    testPlace: string;
    memo: string;
    id: string;
    enrollmentClassName: Array<string>;
};

export type StudentDType = {
    totalPages: number;
    totalElementsCnt: number;
    size: number;
    page: number;
    elementsCntOfPage: number;
    contents: Array<StudentContentsDType>;
};

const fetchStudent = async (query: {
    page: number;
    size?: number;
    sort?: SortStatusType;
}): Promise<StudentDType> => {
    const { page, size = 15, sort } = query;
    const sortString = sort?.value === 'idle' ? null : `${sort?.key},${sort?.value}`;
    const res = await apiClient.get<StudentDType>('/students/status/ATTEND', {
        params: {
            page,
            size,
            sort: sortString,
        },
    });

    return res.data;
};

export const useStudent = (id: string, query: { page: number; size?: number; sort?: SortStatusType; }) => {
    const { page, size, sort } = query;
    const result = useQuery([`/getStudent/${id}`, page, size, sort], () => fetchStudent({ page, size, sort }));
    return result;
}
