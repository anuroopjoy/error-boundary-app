import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        console.log('Footer effects');
        // setTimeout(() => {
        //     throw new Error('test');
        // }, 0);
    });
    return <div>============================</div>;
}
