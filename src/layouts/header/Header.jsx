import logo from '@/../public/logo.webp'

const Header = ()=>{
    return (
        <header className='p-5'>
            <div className="content flex items-center gap-4">
            <div className="logo">
                <img src={logo} alt="Logo Mirai" className='w-32'/>
                </div>                
            <h1 className='heading text-3xl font-medium self-end'>Title</h1>
            </div>
        </header>        
    )
};

export default Header;