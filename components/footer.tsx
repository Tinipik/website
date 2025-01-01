interface Props {
  children?: React.ReactNode;
}

const Footer: React.FC<Props> = ({ children }) => {
  return (
    <footer>
      <div className="container mx-auto px-5 flex justify-center mt-8">
        <div className="py-6 flex flex-col items-center">
          <h3 className="text-base">© Quentin Picault 2025</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
