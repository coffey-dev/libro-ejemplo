import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import "./FlipPages.css";

function FlipPages() {
  const book = useRef(null);

  const loadPagesFromHtml = () => {
    // Get HTML elements representing pages, for example using querySelectorAll
    const pageElements = document.querySelectorAll('.page');

    // Convert the NodeListOf<HTMLElement> to an array
    const pages = Array.from(pageElements);

    // Use the loadFromHtml method to load pages into the book
    book.current.loadFromHtml({ items: pages });
  };

  return (
    <>
      
      <HTMLFlipBook
        width={400}
        height={600}
        ref={book}
        showCover="true"
        size="fixed"
        drawShadow="true"
        autoSize="false"
        maxShadowOpacity={0.5}
        className='FlipBook'
      >
        
        {/* This is where the pages will be loaded */}
        <div className="page">
       
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices commodo turpis nec pulvinar. Etiam finibus aliquam dolor sit amet dictum. Donec vel nisi sodales, pulvinar mauris a, porttitor neque. Vestibulum non mollis augue. Pellentesque non lacinia arcu. Nulla facilisi. Proin nisl nisi, rhoncus ut porttitor non, mattis a erat. Morbi egestas nunc mauris, ut bibendum lorem dapibus iaculis.

Proin a est vitae lorem consequat volutpat vel et libero. In vitae orci tellus. Aliquam est sem, tincidunt sed commodo nec, aliquam vitae erat. Donec lacinia velit at erat tempor ultricies. In vitae quam eu nunc imperdiet hendrerit. Mauris auctor tortor in ipsum rhoncus, sit amet pellentesque felis hendrerit. Curabitur elementum placerat diam, sed euismod ante lobortis vel.

Sed non metus sed mi sodales sagittis quis ut nibh. Nam et magna vitae ex laoreet rhoncus eget at augue. Duis ante neque, mollis at tortor non, placerat ullamcorper ex. Duis facilisis arcu et vestibulum fermentum. In lobortis tincidunt nunc ac tincidunt. Nulla sit amet bibendum nunc, eu ullamcorper nisl. Aliquam id enim eros. Mauris eu cursus massa. Proin commodo justo velit, at volutpat urna consequat nec. Donec mattis, lacus a tristique ultrices, neque diam tempor dolor, et maximus est est quis turpis. Curabitur iaculis dui sit amet tincidunt dapibus. Suspendisse porttitor libero nec est pharetra, a commodo diam sollicitudin. Vestibulum egestas varius libero, sed lobortis eros condimentum eget</p></div>
        <div className="page"><p>-	Sin duda me siento más seguro bajo tierra –dices.</p>
<p>-	Entonces sígueme –te responde Keesa, pasando a prisa entre dos largas pilas de escombros-. Debe de haber… ¡Sí! ¡Aquí está!</p>
<p>Keesa desaparece de pronto, y tú corres hacia donde él estaba parado. Compruebas que hay una abertura en el suelo. Tratas de introducirte en ella con cuidado, pero resbalas y de repente estás deslizándote hacia abajo por un largo pasadizo. Aterrizas en el fondo con un golpe seco.</p>
<p>-	¡Ay! – gritas-. ¡Mi rodilla!</p>
<p>-	¿Estás muy lastimado? ¡Puedes caminar? –te grita Keesa desde alguna parte de la oscuridad, más adelante.</p>
<p>-	Estoy bien. Solamente me pelé la rodilla –le respondes.</p>
<p>-	No tendría que haberme adelantado tanto –dice Keesa; vuelve adonde te hallas sentado en el suelo y te toca la rodilla.</p>
<p>-	¿Y ahora qué hacemos? –preguntas.</p>
<p>-	Esperaremos hasta que nuestros ojos se acostumbren a la penumbra –te dice Keesa-. Luego averiguaremos qué es lo que hay acá abajo.</p>
<p>Después de un rato, tú y Keesa comienzan a descender por un largo pasillo. En muchos lugares el cielo raso se ha derrumbado, y deben caminar por encima de pilas de escombros. Siguen y siguen, siempre adelante. Deben de haber llegado ya al límite de la ciudad, piensas, o aún más allá. Entonces ves una luz brillante en el túnel, más adelante, arriba. Ambos corren hacia ella. Cuando llegan allí, sólo son capaces de abrir la boca de asombro.</p>
<p>Keesa deja escapar un chillido de satisfacción.</p>
<p>-¡Qué suerte!</p></div>
        <div className="page"><p>-	Sin duda me siento más seguro bajo tierra –dices.</p>
<p>-	Entonces sígueme –te responde Keesa, pasando a prisa entre dos largas pilas de escombros-. Debe de haber… ¡Sí! ¡Aquí está!</p>
<p>Keesa desaparece de pronto, y tú corres hacia donde él estaba parado. Compruebas que hay una abertura en el suelo. Tratas de introducirte en ella con cuidado, pero resbalas y de repente estás deslizándote hacia abajo por un largo pasadizo. Aterrizas en el fondo con un golpe seco.</p>
<p>-	¡Ay! – gritas-. ¡Mi rodilla!</p>
<p>-	¿Estás muy lastimado? ¡Puedes caminar? –te grita Keesa desde alguna parte de la oscuridad, más adelante.</p>
<p>-	Estoy bien. Solamente me pelé la rodilla –le respondes.</p>
<p>-	No tendría que haberme adelantado tanto –dice Keesa; vuelve adonde te hallas sentado en el suelo y te toca la rodilla.</p>
<p>-	¿Y ahora qué hacemos? –preguntas.</p>
<p>-	Esperaremos hasta que nuestros ojos se acostumbren a la penumbra –te dice Keesa-. Luego averiguaremos qué es lo que hay acá abajo.</p>
<p>Después de un rato, tú y Keesa comienzan a descender por un largo pasillo. En muchos lugares el cielo raso se ha derrumbado, y deben caminar por encima de pilas de escombros. Siguen y siguen, siempre adelante. Deben de haber llegado ya al límite de la ciudad, piensas, o aún más allá. Entonces ves una luz brillante en el túnel, más adelante, arriba. Ambos corren hacia ella. Cuando llegan allí, sólo son capaces de abrir la boca de asombro.</p>
<p>Keesa deja escapar un chillido de satisfacción.</p>
<p>-¡Qué suerte!</p></div>
        {/* Add more pages as needed */}
        
      </HTMLFlipBook>
    </>
  );
}

export default FlipPages;
