import { useEffect, useState } from 'react';
import { ScrapeProvider } from './ScrapeContext';

//custom Hooks
const useScrapes = () => {
    const [scrapes, setScrapes] = useState({
        instagram: [],
    });

    // useEffect(function() {
    //     (async () => {
    //       console.log('Mounting or Updating');
    //       const res = await fetch('http://localhost:2093/data');
    //       const data = await res.json();
    //       setScrapes(data);
    //     })();
    // }, []);


    //Custom Hook으로 Fetch함
    useEffect( () => {
        (async () => {
            console.log('Mounting or Updating');
            const res = await fetch('http://localhost:2093/data');
            const data = await res.json();
            setScrapes(data);
          })();
    }, []);
    



    return scrapes;
}

const Page = ({children}) => {
    const scrapes = useScrapes();
    return (
        <ScrapeProvider value={{ scrapes, }}>
        <div className="page">{children}</div>
        </ScrapeProvider>
    );
}

export default Page;
