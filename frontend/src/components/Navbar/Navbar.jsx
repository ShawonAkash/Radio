import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

const Navbar = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div className='sticky top-0 z-50'>
      <nav className='bg-white dark:bg-gray-800 '>
        <div className='max-w-7xl mx-auto px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className=' flex items-center'>
              <a className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                Radio
              </a>
              <div>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link
                    className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    to={'/'}
                  >
                    Home
                  </Link>
                  {userInfo ? (
                    <div>
                      <Link
                        to={'/editUser'}
                        className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        {userInfo.name}
                      </Link>
                      <a
                        onClick={logoutHandler}
                        className='text-gray-300 hover:cursor-pointer  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div>
                      <Link
                        className='text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        to={'/login'}
                      >
                        Login
                      </Link>
                      <Link
                        className='text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        to={'/register'}
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='ml-4 flex items-center md:ml-6'></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
