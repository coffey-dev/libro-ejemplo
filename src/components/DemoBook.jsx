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
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="page-text">{props.children}</div>
          <div className="page-footer">
          <p>Si subes directamente a la montaña,</p>
          <p>pasa a la página 28.</p>
          <br></br>
          <p>Si exploras alrededor de la base,</p>
          <p>pasa a la página 30.</p>
          </div>
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
            <Page number={1}><p>-Sin duda me siento más seguro bajo tierra –dices.</p>
<p>-Entonces sígueme –te responde Keesa, pasando a prisa entre dos largas pilas de escombros-. Debe de haber… ¡Sí! ¡Aquí está!</p>
<p>Keesa desaparece de pronto, y tú corres hacia donde él estaba parado. Compruebas que hay una abertura en el suelo. Tratas de introducirte en ella con cuidado, pero resbalas y de repente estás deslizándote hacia abajo por un largo pasadizo. Aterrizas en el fondo con un golpe seco.</p>
<p>-¡Ay! – gritas-. ¡Mi rodilla!</p>
<p>-¿Estás muy lastimado? ¡Puedes caminar? –te grita Keesa desde alguna parte de la oscuridad, más adelante.</p>
<p>-Estoy bien. Solamente me pelé la rodilla –le respondes.</p>
<p>-No tendría que haberme adelantado tanto –dice Keesa; vuelve adonde te hallas sentado en el suelo y te toca la rodilla.</p>
<p>-¿Y ahora qué hacemos? –preguntas.</p>
<p>-Esperaremos hasta que nuestros ojos se acostumbren a la penumbra –te dice Keesa-. Luego averiguaremos qué es lo que hay acá abajo.</p>
<p>Después de un rato, tú y Keesa comienzan a descender por un largo pasillo. En muchos lugares el cielo raso se ha derrumbado, y deben caminar por encima de pilas de escombros. Siguen y siguen, siempre adelante. Deben de haber llegado ya al límite de la ciudad, piensas, o aún más allá. Entonces ves una luz brillante en el túnel, más adelante, arriba. Ambos corren hacia ella. Cuando llegan allí, sólo son capaces de abrir la boca de asombro.</p>
<p>Keesa deja escapar un chillido de satisfacción.</p>
<p>-¡Qué suerte!</p>

</Page>
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