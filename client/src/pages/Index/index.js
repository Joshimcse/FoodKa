// - Import npm packages
import React from "react";
import { isMobileOnly } from "react-device-detect";
// - Custom Components/Interfaces
import ProductSlider from "../../components/ProductSlider";

// - Stylesheets

const IndexPage = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {isMobileOnly ? (
        <>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          voluptates accusamus eum est doloribus voluptatum voluptas dicta
          corrupti possimus sint fugiat aperiam, officiis at esse minima debitis
          incidunt hic eaque beatae perspiciatis. Inventore explicabo ea eum
          recusandae quam modi veritatis dolores error odio optio at officia
          vero nemo, magnam nostrum a. Obcaecati autem ipsa doloremque nobis,
          voluptas iusto quia est nulla totam saepe quae nisi id aspernatur
          adipisci deserunt fugit quo perferendis! Ex nihil debitis enim totam
          cumque, voluptate rem nesciunt dolores, eaque similique voluptatem,
          itaque commodi eveniet veritatis repellat recusandae numquam! Quos
          necessitatibus cum quisquam nostrum possimus magni explicabo cumque
          inventore quis debitis totam recusandae sunt, vitae sapiente itaque
          culpa cupiditate consequatur fugit, incidunt, enim harum.
          Necessitatibus commodi nobis suscipit impedit ad tempora iusto est
          inventore quod sed facere, eveniet cupiditate magni similique
          voluptatum a magnam ipsum assumenda ipsa dolore laborum enim.
          Voluptates, optio nihil aut molestiae obcaecati iusto. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quam ea pariatur unde
          nobis reiciendis? Dolor explicabo nemo eligendi possimus. Quo minima
          voluptate, pariatur facere reiciendis tempora unde quaerat! Laudantium
          debitis possimus ea voluptates aspernatur esse fugiat a. Praesentium
          mollitia sapiente earum minima incidunt unde voluptatum debitis,
          distinctio voluptates eos aspernatur? Reiciendis quasi repudiandae
          quam aut perferendis dignissimos! Dolorum unde nihil odit, omnis
          ratione quibusdam fuga, rem qui placeat quos aliquam? Unde dignissimos
          possimus voluptates dolorem maiores saepe rerum odit error aperiam
          eaque. At a magnam neque! Consequuntur commodi amet omnis, ex qui sint
          corporis quam! Nulla aspernatur, reiciendis facere ipsa officia et
          eaque sit, harum vitae alias quis vero fugit, laborum tempore rerum ea
          quo illo recusandae voluptas neque dolorum?
        </>
      ) : (
        <>
          <ProductSlider />
        </>
      )}
    </>
  );
};

export default IndexPage;
