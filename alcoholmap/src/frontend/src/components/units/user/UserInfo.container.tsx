import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function UserInfoPage(): JSX.Element {
    const router = useRouter();
    const { userId } = router.query;

    return (
        <>
        <h1>{userId}</h1>
        </>
    );
}