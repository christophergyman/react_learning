import Image from 'next/image'
import MyButton from './components/my-button'
import MyList from './components/render-list'
import MyButtonClick from './components/button-click'

export default function Home() {
  return (
    <main> 
      <div className='flex min-h-screen flex-col items-center'>
        <MyButton/>
        <MyList/>
        <MyButtonClick/>
      </div>
    </main>
  )
}
