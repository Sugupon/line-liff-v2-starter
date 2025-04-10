export function Homebuttons() {

const ITEMS =[
    {
        href :"https://developers.line.biz/en/docs/liff/developing-liff-apps/", 
        classname:"home__buttons__button button--primary",
        contents:"LIFF Documentation"
    },
    {
        href :"https://liff-playground.netlify.app/", 
        classname:"home__buttons__button button--tertiary",
        contents:"LIFF Playground"
    },
    {
        href :"https://developers.line.biz/console/", 
        classname:"home__buttons__button button--secondary",
        contents:"LINE Developers Console"
    }
            ]

return(
    <div className="home__buttons">
    {ITEMS.map(item =>{
        return(
            <a key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={item.classname}
          >
            {item.contents}
          </a>
        )
    })}

{/* 
    <a
      href="https://developers.line.biz/en/docs/liff/developing-liff-apps/"
      target="_blank"
      rel="noreferrer"
      className="home__buttons__button button--primary"
    >
      LIFF Documentation
    </a>
    <a
      href="https://liff-playground.netlify.app/"
      target="_blank"
      rel="noreferrer"
      className="home__buttons__button button--tertiary"
    >
      LIFF Playground
    </a>
    <a
      href="https://developers.line.biz/console/"
      target="_blank"
      rel="noreferrer"
      className="home__buttons__button button--secondary"
    >
      LINE Developers Console
    </a> */}
  </div>
)
}