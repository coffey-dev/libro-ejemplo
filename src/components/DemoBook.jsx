import React, { useState, useRef, useEffect, useCallback} from "react";
import HTMLFlipBook from "react-pageflip";


const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  });
  
  export default function DemoBook(props){

    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(1);
  
  const book = useRef();
   

const onFlip = useCallback((e) => {
  setPagina(e.data);
  console.log('Pagina actual: ' + e.data)
})

const onInit = useCallback(() => {
  const conteoDePaginas = obtenerTotalDePaginas(book.current.pageFlip());
  setTotalPaginas(conteoDePaginas);
}, []);

useEffect(() => {
  onInit();
}, [onInit]);


   function obtenerTotalDePaginas() {
    const flipBook = book.current.pageFlip();
    if (flipBook) {
      const totalDelConteoDePaginas = flipBook.getPageCount();
      return totalDelConteoDePaginas;
    }
    return 0;
   }
  
      return (
        <div>
          <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            onInit={onInit}
       /* onChangeOrientation={onChangeOrientation} */
/* onChangeState={onChangeState} */

            className="demo-book"
            ref={book}
          >

            <PageCover>BOOK TITLE</PageCover>
            <Page number={1}>Lorem ipsum...</Page>
            <Page number={2}>Lorem ipsum...</Page>
            <Page number={3}>Lorem ipsum...</Page>
            <Page number={4}>Lorem ipsum...</Page>
            <Page number={5}>Lorem ipsum...</Page>
            <Page number={6}>Lorem ipsum...</Page>
        
            <PageCover>THE END</PageCover>

          </HTMLFlipBook>
  
          <div className="container">
            <div>

            <button onClick={() => book.current.pageFlip().flipPrev()}>
                Prev page
                </button>
           

              [<span>{pagina}</span>of
               <span>{totalPaginas}</span>]

              
                <button onClick={() => book.current.pageFlip().flipNext()}>
                Next page
                </button>

            </div>
            <div>

          

            </div>
          </div>
          </div>

      )
  }