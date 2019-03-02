import React from "react";
import "./MainContent.css";

const MainContent = ({ mainContentBg, mainContentText }) => {
  return (
    <div className="MainContent" style={{ backgroundColor: mainContentBg }}>
      <p style={{ color: mainContentText }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        dui a tortor iaculis mattis. Mauris sagittis fermentum tortor, ut dictum
        est hendrerit sed. Phasellus consectetur posuere est sed euismod. Mauris
        diam nisi, malesuada a lobortis quis, hendrerit at nibh. Suspendisse
        finibus consequat mi, vel placerat justo commodo in. Nulla scelerisque
        tristique ipsum, vitae blandit orci bibendum vel. Pellentesque eu turpis
        eget enim placerat euismod. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum
        iaculis sapien nec euismod. Phasellus vel odio scelerisque, molestie
        mauris sed, sagittis lorem. Donec ac commodo leo. Donec sed suscipit
        odio. Suspendisse non dui nibh. Nam ipsum nisl, consectetur sed rhoncus
        vel, fermentum a erat. <br />
        <br /> Nulla a finibus odio, eu pulvinar elit. Morbi porttitor consequat
        sollicitudin. Curabitur malesuada, neque in mollis accumsan, turpis orci
        hendrerit lacus, eget placerat dui quam quis tellus. Morbi suscipit
        massa id tortor imperdiet rhoncus. Praesent interdum turpis nulla, at
        fringilla eros fermentum quis. Proin aliquam aliquet eros non lacinia.
        Sed sagittis justo vel elit faucibus cursus. Donec fermentum blandit
        dui, vel sagittis tortor facilisis eu. <br />
        <br />
        Aenean accumsan nec augue et ullamcorper. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Proin id est
        non tellus lobortis ullamcorper. Duis a ex finibus, varius metus sit
        amet, congue lorem. Vivamus neque mauris, eleifend ac urna in, dapibus
        pretium nulla. In hac habitasse platea dictumst. Cras lobortis purus
        sem, at vestibulum sapien vulputate vel. Cras vel massa sed tortor
        feugiat gravida. Duis sit amet orci at metus malesuada hendrerit. Cras
        justo orci, gravida pulvinar elementum vel, euismod et elit. Sed sem
        nisi, fermentum vitae odio quis, finibus efficitur turpis. Ut eleifend
        urna non arcu auctor vestibulum. Nulla ac posuere libero, nec consequat
        lectus. <br />
        <br /> Integer quis dui quis nibh porttitor suscipit. Duis ornare ex id
        viverra volutpat. Aliquam nec ex ex. Ut iaculis est id magna ornare
        iaculis. Pellentesque mauris mauris, blandit vitae elit at, consequat
        luctus massa. Morbi lacinia sit amet dui vitae ultricies. Maecenas sed
        congue nunc. <br />
        <br /> Mauris gravida mi id metus dapibus, vitae mattis justo cursus.
        Praesent dapibus cursus vulputate. Nulla maximus elit vitae mollis
        facilisis. Proin fringilla tellus sodales porttitor feugiat. Sed egestas
        pulvinar sapien, et ornare mi iaculis eget. Vivamus pellentesque, libero
        auctor sollicitudin sodales, lectus elit elementum ante, sed blandit
        lorem sapien sit amet sem. Curabitur lacinia, mauris et commodo
        imperdiet, tellus risus condimentum urna, sed porttitor eros erat id
        enim. Integer sed est pharetra arcu accumsan malesuada. Sed consequat
        enim ac mauris venenatis, quis ornare tellus condimentum. Nullam
        vulputate sapien ut eros tempor semper. Aliquam erat volutpat. Quisque
        ultrices id nibh sit amet efficitur.
      </p>
    </div>
  );
};

MainContent.defaultProps = {
  mainContentBg: "#fff",
  mainContentText: "#000"
};

export default MainContent;
