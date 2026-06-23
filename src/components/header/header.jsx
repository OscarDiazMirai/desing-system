import logo from '@/../public/logo.webp'

export const Header = ()=>{
    return (
        <header>
            <div className="content flex items-center gap-4">
            <div className="logo">
                <img src={logo} alt="Logo Mirai" className='w-56'/>
                </div>                
            <h1 className='heading text-4xl font-medium'>Design system</h1>
            </div>
        </header>        
    )
};