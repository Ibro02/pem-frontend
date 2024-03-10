import { useEffect, useState } from 'react'
import './App.css'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useAppSelector } from './redux/store'
import { useDispatch } from 'react-redux'
import Button from './components/common/Button/Button'
import Login from './components/group/Login/Login '
import Badge from './components/common/Badge/Badge'
import Logo from './assets/Logo.svg'
import Background from './assets/LoginBackground.svg'
import { Outlet } from 'react-router-dom'
import { KorisnikLoginService } from './api/services/KorisnikLogin'

const POSTS = 
[
  {id: 1, title:"Neki post1"},
  {id: 2, title:"Neki post2"},
]
function App() {
const login = useAppSelector((state)=>state.loginReducer.user);
const dispatch = useDispatch();
  const postsQuery = useQuery({
queryKey: ["posts"],
//@ts-ignore
queryFn: () => wait(1000).then(()=>[...POSTS])
  })

const test=async()=>
{
let {data} = await KorisnikLoginService.getInfo();
 console.log(data);
}


  // if (postsQuery.isLoading) return <h1 className='text-red-500'>Loading...</h1>
  // if (postsQuery.isFetched) return <h1>Data is fetched successifully</h1>

  return (
    <>
    <div className='flex flex-col justify-center content-center gap-8 h-full '>
      {/* <img src={Background} className='absolute -z-10'/> */}
      <div className="w-24 h-24 flex justify-center mx-auto -mb-10 bg-zinc-300 rounded-full shadow-xl z-10" >
<img className=' content-center justify-center m-auto' src={Logo}/>
      </div>
      <Badge color='bg-neutral-700'>LOGIN INTO SYSTEM</Badge>
<Login/>
    </div>
    </>
  )
}

export default App
