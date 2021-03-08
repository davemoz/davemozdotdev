const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <>
      <footer>
        copyright © { year } Dave Mozdzanowski
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
					padding: 20px 0;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
					font-family: Helvetica, Arial, sans-serif;
					color: #5d5d5d;
        }
      `}</style>
    </>
  )
}

export default Footer;