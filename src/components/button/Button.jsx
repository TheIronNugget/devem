import './Button.scss';

const Button = ({children, bgc}) => {
  return (
    <Button className={`btn ${bgc}`}>{children}</Button>
  )
}

export default Button