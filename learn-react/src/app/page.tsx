"use client";
import Image from 'next/image'
import MyButton from './components/my-button'
import MyList from './components/render-list'
import MyButtonClick from './components/button-click'
import MyButtonCount from './components/button-count'
import { useState } from "react";
import { MyButtonProp } from './components/myprops';

export default function Home() {
  return (
    <main> 
      <div className='flex min-h-screen flex-col items-center'>
        {/* <MyButton/> */}
        {/* <MyList/> */}
        <MyButtonClick/>
        <MyButtonProp name='Chris' messageCount={10}/>
      </div>
    </main>
  );
};