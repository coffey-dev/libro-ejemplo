import React, { useState, useRef, useEffect, useCallback} from "react";
import HTMLFlipBook from "react-pageflip";
import "./DemoBook.css";



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

const messageWithNewLines = props.children.texto;
const lines = messageWithNewLines.split('\n');

const opcion1WithNewLines = props.children.opcion1;
  const opcion1Lines = opcion1WithNewLines.split('\n');

  const opcion2WithNewLines = props.children.opcion2;
  const opcion2Lines = opcion2WithNewLines.split('\n');


  const borderTopStyle = 
  props.children.opcion1 !== '' && props.children.opcion2 !== '' ? 
    { borderTop: '1.9px solid black' } : 
    props.children.opcion1 !== '' && props.children.opcion2 === '' ? 
      { borderTop: '1.9px solid black', height: '65px' } : 
      {};



    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="page-header">{props.children.hoja}</div>
          <div className="page-text">
          <div>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
          </div>
          <div className="page-footer" style={borderTopStyle}>
  <div>
  {opcion1Lines.map((option1, index) => (
              <p key={index}>{option1}</p>
            ))}
    <br></br>
    {opcion2Lines.map((option2, index) => (
              <p key={index}>{option2}</p>
            ))}
  </div>
</div>

        </div>
      </div>
    );
  });
  
  export default function DemoBook(props){

    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    const book = useRef();

    const fetchContent = async () => {
      try {
        const response = await fetch("https://coffey-dev.github.io/json-textos/paginas.json"); // Update the path to your JSON file
        const data = await response.json();
        setContent(data);
        setIsLoading(false); // Set loading state to false after content is loaded
      } catch (error) {
        console.error("Error fetching content:", error);
        setIsLoading(false); 
      }
    };

    useEffect(() => {
      fetchContent();
    }, []);
  
  

   

const onFlip = useCallback((e) => {
  setPagina(e.data);
  console.log('Pagina actual: ' + e.data)
})

const onInit = useCallback(() => {
  const conteoDePaginas = obtenerTotalDePaginas(book.current.pageFlip());
  setTotalPaginas(conteoDePaginas);
}, []);


   function obtenerTotalDePaginas() {
    const flipBook = book.current.pageFlip();
    if (flipBook) {
      const totalDelConteoDePaginas = flipBook.getPageCount();
      return totalDelConteoDePaginas;
    }
    return 0;
   }
  
   if (isLoading) {
    return <div>Loading...</div>; // Render a loading message or spinner while content is being fetched
  }

      return (
        <div className="wrapper">
         
          <HTMLFlipBook
            width={500}
            height={600}
            size="fixed"
            autoSize={true}
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
            
            {content.map((pageContent) => (
  <Page key={pageContent.id} number={pageContent.hoja}>
    {pageContent}
  </Page>
))}
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