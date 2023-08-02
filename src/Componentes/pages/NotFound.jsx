import e404 from './404.jpg'

const NotFound = () => {
  return (
    <div className='not_found'>
        <img src={e404} alt="404-error" />
    </div>
  )
}

export default NotFound