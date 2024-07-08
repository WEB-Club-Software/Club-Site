import Head from "next/head"
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    backTo?: string;
  }

const BasePage = ({children,backTo}:Props)=>{

    return (
        <>
          {children}
        </>
    )
}
export default BasePage;