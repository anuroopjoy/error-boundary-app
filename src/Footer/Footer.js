import { useEffect } from 'react';

export default function Footer({ resource }) {
    useEffect(() => {
        console.log('Footer effects');
    });
    return <div>============================</div>;
}
