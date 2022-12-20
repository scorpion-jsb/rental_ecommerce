import Navbar from './navbar'
export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className='relative'>{props.children}</main>
    </div>
  )
}