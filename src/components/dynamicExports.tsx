import dynamic from 'next/dynamic';
import Spinner from './Spinner/Spinner';

export const DynamicNavBar = dynamic(() => import('../components/NavBar/NavBar'), {
    loading: () => <Spinner/>,
    ssr: true
  })

  export const DynamicPageView = dynamic(() => import('../components/PageView/PageView'), {
    loading: () => <Spinner/>,
    ssr: true
  })