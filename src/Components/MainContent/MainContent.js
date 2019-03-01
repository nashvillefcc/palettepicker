import React from "react";
import PropTypes from "prop-types";
import "./MainContent.css";

const MainContent = ({ mainContentBg, mainContentText }) => {
  return (
    <div className="MainContent" style={{ backgroundColor: mainContentBg }}>
      <p style={{ color: mainContentText }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et dui
        facilisis, feugiat enim in, vestibulum libero. Vestibulum dignissim nibh
        at mauris iaculis, ut porta velit gravida. Sed malesuada augue sit amet
        sapien pellentesque, vitae mollis sem gravida. Aliquam sit amet turpis
        diam. Vivamus vel leo nec metus laoreet ullamcorper. Suspendisse euismod
        ac justo sit amet efficitur. Donec rutrum lacus at libero convallis, non
        aliquet sapien consequat. Vivamus ut tempus lorem, vitae sagittis neque.
        Ut at molestie eros. Fusce pharetra ultricies est ac consequat. Aenean
        lacinia gravida nisi, quis tincidunt tortor facilisis at. Integer dolor
        augue, pretium non purus congue, suscipit sagittis dolor. Suspendisse
        quis viverra felis. Vivamus aliquet magna in justo volutpat ultrices.
        Sed elementum lorem lectus, ut mollis nisl mollis non. Suspendisse
        potenti. Praesent ac tempor magna, vel sagittis ex. Phasellus consequat
        augue urna, quis mattis urna hendrerit sed. Phasellus eget fringilla
        urna.
      </p>
    </div>
  );
};

MainContent.propTypes = {
  mainContentBg: PropTypes.string.isRequired,
  mainContentText: PropTypes.string.isRequired
};

export default MainContent;
