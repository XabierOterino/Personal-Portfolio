

function Header() {
    const style = {
        headerContainer : "header w-full sticky top-0 bg-black mx-auto flex items-center justify-between",
        mainTitle: ' py-4 mx-8 font-bold  text-3xl',
        nav : 'hidden mx-4 md:flex   md:gap-16 items-center justify-between',
        button : 'bg-theme mx-8 font-bold   px-4 py-2',
        section : "font-semibold "
    }
  return (
    <div className={style.headerContainer}>
        <h1 className={style.mainTitle}> 
        Xabier Oterino
        </h1>
        <nav className={style.nav}>
            <a className={style.section}href="#values">Values</a>
            <a className={style.section}href="#work">Work</a>
            <a className={style.section}href="#education">Education</a>
        </nav>
        <a href="#hireme">
          <div   className={style.button}>Hire me</div>
        </a>
        
    </div>
  )
}

export default Header